<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ValidateSignature
{
    public function handle(Request $request, Closure $next)
    {
        // Signature validation logic
        return $next($request);
    }
}
