package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.dev.ecommercemono.model.OrderItem;
import org.dev.ecommercemono.repository.OrderItemRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class OrderItemServiceImpl implements OrderItemService {

    private final OrderItemRepository orderItemRepository;

    @Override
    public List<OrderItem> createOrderItems(List<OrderItem> orderItems) {
        log.info("Creating order items: {}", orderItems);
        return orderItemRepository.saveAll(orderItems);
    }
}
