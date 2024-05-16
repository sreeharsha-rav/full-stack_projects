package org.dev.ecommercemono.controller;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.dev.ecommercemono.dto.OrderForm;
import org.dev.ecommercemono.dto.OrderItemDto;
import org.dev.ecommercemono.dto.ProductResponse;
import org.dev.ecommercemono.exception.ResourceNotFoundException;
import org.dev.ecommercemono.model.Order;
import org.dev.ecommercemono.model.OrderItem;
import org.dev.ecommercemono.model.OrderStatus;
import org.dev.ecommercemono.model.Product;
import org.dev.ecommercemono.service.OrderItemService;
import org.dev.ecommercemono.service.OrderService;
import org.dev.ecommercemono.service.ProductService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderItemService orderItemService;
    private final ProductService productService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull List<Order> listOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/items/all")
    @ResponseStatus(HttpStatus.OK)
    public @NotNull List<OrderItem> listOrderItems() {
        return orderItemService.getAllOrderItems();
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody OrderForm form) {
        List<OrderItemDto> orderItemDtos = form.orderItems();   // Get order items from form

        // Validate items existence
        validateItemsExistence(orderItemDtos);

        // Create order entity and save it in repository
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
        Order savedOrder = orderService.createOrder(order);

        // Create order items entities and save them in repository
        List<OrderItem> orderItems = orderItemDtos.stream().map(dto -> {
            OrderItem orderItem = new OrderItem(savedOrder, dto.getProduct(), dto.getQuantity());
            return orderItem;
        }).toList();
        List<OrderItem> savedOrderItems = orderItemService.createOrderItems(orderItems);

        // Update order with order items
        savedOrder.setOrderItems(new ArrayList<>(savedOrderItems));
        orderService.updateOrder(savedOrder);

        // Construct location URI
        String uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedOrder.getId())
                .toUriString();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", uri);

        // Return response
        return new ResponseEntity<>(savedOrder, headers, HttpStatus.CREATED);
    }

    // Method to validate items existence
    private void validateItemsExistence(List<OrderItemDto> orderItemDtos) {
        // Get products from order items
        List<Product> products = orderItemDtos.stream().map(OrderItemDto::getProduct).toList();
        List<Long> productIds = products.stream().map(Product::getId).toList();

        // Check if all products exist
        List<ProductResponse> productResponses = productService.doProductsExist(productIds);
        boolean allProductsExist = productResponses.stream().allMatch(ProductResponse::getExists);

        // Throw exception if one or more products do not exist
        if (!allProductsExist) {
            throw new ResourceNotFoundException("One or more products do not exist");
        }
    }

}
