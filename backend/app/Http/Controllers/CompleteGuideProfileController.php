<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompleteGuideProfileRequest;

class CompleteGuideProfileController extends Controller
{
    public function store(CompleteGuideProfileRequest $request){
        $Credintials = $request->validated();


    }
}
