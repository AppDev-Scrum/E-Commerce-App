<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Sample products
        Product::create([
            'name' => 'Laptop',
            'barcode' => '1234567890',
            'description' => 'High performance laptop with 16GB RAM and 512GB SSD.',
            'price' => 999.99,
            'quantity' => 50,
            'category' => 'Electronics',
        ]);

        Product::create([
            'name' => 'Wireless Mouse',
            'barcode' => '1234567891',
            'description' => 'Ergonomic wireless mouse with Bluetooth support.',
            'price' => 29.99,
            'quantity' => 200,
            'category' => 'Accessories',
        ]);

        Product::create([
            'name' => 'Gaming Keyboard',
            'barcode' => '1234567892',
            'description' => 'Mechanical keyboard with RGB lighting and anti-ghosting keys.',
            'price' => 89.99,
            'quantity' => 150,
            'category' => 'Accessories',
        ]);

        Product::create([
            'name' => 'Smartphone',
            'barcode' => '1234567893',
            'description' => 'Latest smartphone with a 48MP camera and 5G connectivity.',
            'price' => 799.99,
            'quantity' => 100,
            'category' => 'Electronics',
        ]);

        Product::create([
            'name' => 'Bluetooth Headphones',
            'barcode' => '1234567894',
            'description' => 'Noise-cancelling Bluetooth headphones with 20 hours of battery life.',
            'price' => 119.99,
            'quantity' => 75,
            'category' => 'Accessories',
        ]);

        Product::create([
            'name' => '4K TV',
            'barcode' => '1234567895',
            'description' => 'Ultra HD 4K television with smart features and HDR support.',
            'price' => 499.99,
            'quantity' => 40,
            'category' => 'Electronics',
        ]);

        Product::create([
            'name' => 'Digital Camera',
            'barcode' => '1234567896',
            'description' => 'Compact digital camera with 20MP sensor and 4K video recording.',
            'price' => 299.99,
            'quantity' => 60,
            'category' => 'Electronics',
        ]);

        Product::create([
            'name' => 'Tablet',
            'barcode' => '1234567897',
            'description' => '10-inch tablet with 128GB storage and stylus support.',
            'price' => 399.99,
            'quantity' => 80,
            'category' => 'Electronics',
        ]);

        Product::create([
            'name' => 'Smartwatch',
            'barcode' => '1234567898',
            'description' => 'Fitness-focused smartwatch with heart rate monitoring and GPS.',
            'price' => 159.99,
            'quantity' => 120,
            'category' => 'Accessories',
        ]);

        Product::create([
            'name' => 'External Hard Drive',
            'barcode' => '1234567899',
            'description' => '1TB external hard drive for backup and data storage.',
            'price' => 49.99,
            'quantity' => 250,
            'category' => 'Storage',
        ]);
    }
}
