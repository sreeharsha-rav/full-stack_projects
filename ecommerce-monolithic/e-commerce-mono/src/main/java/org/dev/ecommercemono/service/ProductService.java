package org.dev.ecommercemono.service;

import org.dev.ecommercemono.model.Product;

public interface ProductService {
    Iterable<Product> getAllProducts();
    Product getProductById(Long id);
    Product save(Product product);
}
