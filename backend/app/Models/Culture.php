<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Culture extends Model
{
    protected $fillable = [
        'destination_id',
        'title',
        'description',
    ];

    public function destination(): BelongsTo
    {
        return $this->belongsTo(Destination::class);
    }

    public function traditions(): HasMany
    {
        return $this->hasMany(CultureTradition::class);
    }
}
