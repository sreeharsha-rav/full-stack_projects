package org.dev.ecommercemono.controller;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.dev.ecommercemono.dto.OrderForm;
import org.dev.ecommercemono.dto.OrderItemDto;
import org.dev.ecommercemono.model.Order;
import org.dev.ecommercemono.model.OrderItem;
import org.dev.ecommercemono.model.OrderStatus;
import org.dev.ecommercemono.service.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final OrderItemService orderItemService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public @NotNull Iterable<Order> listOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody OrderForm form) {
        List<OrderItemDto> formDtos = form.orderItems();
        // TODO: Validate item products existence

        // Create order entity
        Order order = new Order();
        order.setStatus(OrderStatus.PAID.name());
//        order = orderService.createOrder(order);

        // TODO: Create order items entities and save them

    }

    // Method to validate item products existence

}
