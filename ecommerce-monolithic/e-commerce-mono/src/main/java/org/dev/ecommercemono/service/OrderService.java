package org.dev.ecommercemono.service;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.dev.ecommercemono.model.Order;
import org.springframework.validation.annotation.Validated;

@Validated
public interface OrderService {
    @NotNull Iterable<Order> getAllOrders();
    Order createOrder(@NotNull(message = "The order cannot be null.") @Valid Order order);
    void updateOrder(@NotNull(message = "The order cannot be null.") @Valid Order order);
}
