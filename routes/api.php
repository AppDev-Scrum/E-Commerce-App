<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Authenticated user route (if needed)
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Define the search route first to avoid conflict with apiResource
Route::get('/products/search', [ProductController::class, 'search']);

// Product routes using apiResource
Route::apiResource('products', ProductController::class);
