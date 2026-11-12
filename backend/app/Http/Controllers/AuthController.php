<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Register(AuthRequest $request)
    {
        $credentials = $request->validated();

        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => Hash::make($credentials['password']),
            'role' => $credentials['role'],
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Account created successfully!',
            'user' => $user,
            'token' => $token,
        ], 201);
    }

    public function Login(Request $request)
    {
        $credentials = $request->validated();
        // Verifier email o password
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'votre information est incorrecte !'
            ], 401);
        }
        $user = User::where('email', $request->email)->firstOrFail();
        // Delete les anciens tokens (Optionnel)
        $user->tokens()->delete();
        // Kriya token jdid
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Login success',
            'access_token' => $token,
        ], 200);
    }
}
