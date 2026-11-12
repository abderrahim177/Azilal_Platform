<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\RoleMiddleware;

Route::post('/register' , [AuthController::class , 'Register']);
Route::post('/Login' , [AuthController::class , 'login']);

Route::middleware('auth:sanctum')->group(function () {
Route::get('/user', function (Request $request) {
    return $request->user();
});
    Route::middleware(RoleMiddleware::class . 'Visitor')->group(function () {

    });
    Route::middleware(RoleMiddleware::class . 'Guide')->group(function () {

    });
    Route::middleware(RoleMiddleware::class . 'HotelManager')->group(function () {

    });
});