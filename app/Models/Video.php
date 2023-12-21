<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'name',
        'category',
        'actress',
        'producer',
        'release_date',
        'studio',
        'thumbnail',
        'description',
        'views',
        'video',
        'likes',
        'unlikes',
        'keywords',
        'seo_title',
        'seo_description',
    ];
}
