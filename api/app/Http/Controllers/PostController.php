<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'tag' => 'required',
            'price' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);



        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        $post = auth()
            ->user()
            ->posts()
            ->create([
            'title' => $data['title'],
            'description' => $data['description'],
            'tag' => $data['tag'],
            'price' => $data['price'],
            'image' => "storage/images/$imageName",
            ]);

        return response()->json($post, 201);
    }

    public function product()
    {
        $posts = Post::latest()->get();

        //   $users = User::all();
        return response()->json($posts);
    }
}
