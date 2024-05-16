package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import org.dev.ecommercemono.model.Order;
import org.dev.ecommercemono.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Override
    public Iterable<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        order.setDateCreated(LocalDate.now());
        return orderRepository.save(order);
    }

    @Override
    public void updateOrder(Order order) {
        orderRepository.save(order);
    }

}
