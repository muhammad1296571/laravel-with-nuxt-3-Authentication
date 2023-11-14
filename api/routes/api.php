<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::group(['middleware' => 'auth:sanctum'], function () {
//     Route::get('data', [AuthController::class, 'data']);
// });

Route::controller(AuthController::class)->group(function () {

    Route::post('/login', 'index');
    Route::post('/sign_up', 'sign_up');
    Route::post('/contact', 'contact');
});


Route::controller(AuthController::class)->middleware(['auth:sanctum'])->group(function () {

    Route::post('/logout', 'logout');
});



// Route::controller(PostController::class)->group(function () {

//     Route::post('/post', 'create_post');

// });



Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::apiResource('posts', PostController::class);

});
Route::get('data', [AuthController::class, 'data']);
Route::get('product', [PostController::class, 'product']);





// Route::post("login", [AuthController::class, 'index']);
// Route::post("sign_up", [AuthController::class, 'sign_up']);
