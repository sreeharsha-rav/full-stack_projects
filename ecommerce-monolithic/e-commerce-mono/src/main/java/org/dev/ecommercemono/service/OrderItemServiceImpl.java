package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.dev.ecommercemono.model.OrderItem;
import org.dev.ecommercemono.repository.OrderItemRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {

    private final OrderItemRepository orderItemRepository;

    @Override
    public List<OrderItem> getAllOrderItems() {
        // TODO: Construct a response object to return the data
        return orderItemRepository.findAll();
    }

    @Override
    public List<OrderItem> createOrderItems(List<OrderItem> orderItems) {
        return orderItemRepository.saveAll(orderItems);
    }
}
