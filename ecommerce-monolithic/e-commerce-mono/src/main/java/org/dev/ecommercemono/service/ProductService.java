package org.dev.ecommercemono.service;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.dev.ecommercemono.model.Product;
import org.springframework.validation.annotation.Validated;

@Validated
public interface ProductService {
    @NotNull Iterable<Product> getAllProducts();
    Product getProductById(@Min(value = 1L, message = "Invalid product ID.") Long id);
    Product saveProduct(Product product);
}
