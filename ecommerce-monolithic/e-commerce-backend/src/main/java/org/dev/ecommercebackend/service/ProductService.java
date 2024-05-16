package org.dev.ecommercebackend.service;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.dev.ecommercebackend.dto.ProductResponse;
import org.dev.ecommercebackend.model.Product;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Validated
public interface ProductService {
    @NotNull Iterable<Product> getAllProducts();
    Product getProductById(@Min(value = 1L, message = "Invalid product ID.") Long id);
    Product saveProduct(Product product);
    @NotNull List<ProductResponse> doProductsExist(@NotNull List<Long> productIds);
}
