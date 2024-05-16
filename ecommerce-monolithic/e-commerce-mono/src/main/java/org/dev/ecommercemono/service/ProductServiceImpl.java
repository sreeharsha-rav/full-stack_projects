package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import org.dev.ecommercemono.exception.ResourceNotFoundException;
import org.dev.ecommercemono.model.Product;
import org.dev.ecommercemono.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }
}
