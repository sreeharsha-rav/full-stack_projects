package org.dev.ecommercemono.service;

import lombok.RequiredArgsConstructor;
import org.dev.ecommercemono.dto.ProductResponse;
import org.dev.ecommercemono.exception.ResourceNotFoundException;
import org.dev.ecommercemono.model.Product;
import org.dev.ecommercemono.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<ProductResponse> doProductsExist(List<Long> productIds) {
        List<Product> products = productRepository.findByIdIn(productIds);  // Find all products by their IDs

        // For each product ID, check if it exists in the list of products
        return productIds.stream()
                .map(productId -> ProductResponse.builder()
                        .id(productId)
                        .exists(products.stream()
                                .anyMatch(product -> product.getId().equals(productId)))
                        .build())
                .collect(Collectors.toList());
    }
}
