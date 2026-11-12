<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\belongsTo;
class Guide extends Model
{
    protected $fillable = [
        'user_id',
        'phone',
        'description',
        'image',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function destinations(): BelongsToMany
    {
        return $this->belongsToMany(Destination::class);
    }
    
    public function Language () : BelongsToMany 
    {
        return $this->belongsToMany(Language::class);
    }
}
