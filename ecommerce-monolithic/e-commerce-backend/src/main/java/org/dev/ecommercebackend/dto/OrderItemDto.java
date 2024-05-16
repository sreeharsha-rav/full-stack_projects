package org.dev.ecommercebackend.dto;

import lombok.Data;
import org.dev.ecommercebackend.model.Product;

@Data
public class OrderItemDto {
    private Product product;
    private Integer quantity;
}
