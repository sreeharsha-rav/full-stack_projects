package org.dev.ecommercebackend;

import org.dev.ecommercebackend.model.Product;
import org.dev.ecommercebackend.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ECommerceBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.saveProduct(new Product(1L, "TV", 300.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(2L, "Laptop", 800.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(3L, "Smartphone", 500.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(4L, "Tablet", 300.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(5L, "Headphones", 150.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(6L, "Smart Watch", 200.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(7L, "Gaming Console", 400.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(8L, "Bluetooth Speaker", 120.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(9L, "Camera", 700.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(10L, "Printer", 250.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(11L, "Monitor", 200.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(12L, "Keyboard", 50.00, "http://placehold.it/200x100"));
			productService.saveProduct(new Product(13L, "Mouse", 30.00, "http://placehold.it/200x100"));
		};
	}

}
