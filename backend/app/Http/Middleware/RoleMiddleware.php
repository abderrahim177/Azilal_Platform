<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, string $AllowedRole)
    {
        if (!Auth::check()) {
            return response()->json([
                'message' => 'Unauthenticated.'
            ], 401);
        }
        if (Auth::user()->role !== $AllowedRole) {
            return response()->json([
                'message' => 'Access denied. You do not have permission for this resource.',
                'user_role' => Auth::user()->role,
                'required_role' => $AllowedRole
            ], 403);
        }
        return $next($request);
    }
}
