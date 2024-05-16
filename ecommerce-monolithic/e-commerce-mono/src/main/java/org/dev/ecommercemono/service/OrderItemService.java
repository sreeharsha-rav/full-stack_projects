package org.dev.ecommercemono.service;

import org.dev.ecommercemono.model.OrderItem;

import java.util.List;

public interface OrderItemService {
    List<OrderItem> saveOrderItems(List<OrderItem> orderItems);
}
