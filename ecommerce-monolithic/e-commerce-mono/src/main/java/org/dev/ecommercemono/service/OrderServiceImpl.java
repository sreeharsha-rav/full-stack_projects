package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.dev.ecommercemono.model.Order;
import org.dev.ecommercemono.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Override
    public Iterable<Order> getAllOrders() {
        log.info("Getting all orders");
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        order.setDateCreated(LocalDate.now());
        log.info("Creating order: {}", order);
        return orderRepository.save(order);
    }

    @Override
    public void updateOrder(Order order) {
        orderRepository.save(order);
        log.info("Order updated successfully: {}", order);
    }

}
