<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;


// Define the search route first to avoid conflict with apiResource
Route::get('/products/search', [ProductController::class, 'search']);



// List all products
Route::get('/products', [ProductController::class, 'index']);

// Show details of a specific product
Route::get('/products/{id}', [ProductController::class, 'show']);

// Create a new product
Route::post('/products', [ProductController::class, 'store']);

// Update an existing product
Route::put('/products/{id}', [ProductController::class, 'update']);

// Delete a product
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

