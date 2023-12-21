<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('name');
            $table->string('category')->nullable();
            $table->string('actress');
            $table->string('producer')->nullable();
            $table->string('release_date')->nullable();
            $table->string('studio')->nullable();
            $table->longText('thumbnail')->nullable();
            $table->longText('video');
            $table->longText('description');
            $table->string('views')->nullable();
            $table->string('likes')->nullable();
            $table->string('unlikes')->nullable();
            $table->mediumText('keywords');
            $table->string('seo_title')->nullable();
            $table->longText('seo_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
