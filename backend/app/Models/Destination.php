<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Destination extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'category',
        'short_description',
        'description',
        'image',
    ];
    // Destination has many images
    public function images(): HasMany
    {
        return $this->hasMany(DestinationImage::class);
    }
    // Destination has many facts
    public function facts(): HasMany
    {
        return $this->hasMany(DestinationFact::class);
    }
    // Destination has one culture
    public function culture(): HasOne
    {
        return $this->hasOne(Culture::class);
    }
    // Destination has many local products
    public function products(): HasMany
    {
        return $this->hasMany(LocalProduct::class);
    }
    // Destination has one music
    public function music(): HasOne
    {
        return $this->hasOne(Music::class);
    }
    // Destination has many hotels
    public function hotels(): HasMany
    {
        return $this->hasMany(Hotel::class);
    }
    // Destination belongs to many guides
    public function guides(): BelongsToMany
    {
    return $this->belongsToMany(Guide::class);
    }
}
