package org.dev.ecommercebackend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.dev.ecommercebackend.model.OrderItem;
import org.dev.ecommercebackend.repository.OrderItemRepository;

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
