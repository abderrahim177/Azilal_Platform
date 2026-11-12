<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function index(Request $request){
        $Languages = Language::all();
        $Area = Destination::all();

        return response()->json([$Languages , $Area],200);
    }
}
