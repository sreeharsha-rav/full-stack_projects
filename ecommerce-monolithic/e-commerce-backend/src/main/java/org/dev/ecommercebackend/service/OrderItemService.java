package org.dev.ecommercebackend.service;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.dev.ecommercebackend.model.OrderItem;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Validated
public interface OrderItemService {
    @NotNull List<OrderItem> createOrderItems(@NotNull(message = "The order items cannot be null.") @Valid List<OrderItem> orderItems);
}
