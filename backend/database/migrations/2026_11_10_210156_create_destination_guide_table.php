
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('destination_guide', function (Blueprint $table) {
            $table->id();

            $table->foreignId('destination_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('guide_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->unique(['destination_id', 'guide_id']);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('destination_guide');
    }
};
