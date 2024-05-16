package org.dev.ecommercebackend.dto;

import java.util.List;

public record OrderForm (List<OrderItemDto> orderItems) {
}
