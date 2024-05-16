package org.dev.ecommercemono.dto;

import java.util.List;

public record OrderForm (List<OrderItemDto> orderItems) {
}
