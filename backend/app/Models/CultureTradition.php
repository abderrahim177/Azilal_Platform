<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CultureTradition extends Model
{
    protected $fillable = [
        'culture_id',
        'name',
    ];

    public function culture(): BelongsTo
    {
        return $this->belongsTo(Culture::class);
    }
}