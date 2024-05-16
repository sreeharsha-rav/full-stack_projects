package org.dev.ecommercemono.dto;

import lombok.Data;
import org.dev.ecommercemono.model.Product;

@Data
public class OrderItemDto {
    private Product product;
    private Integer quantity;
}
