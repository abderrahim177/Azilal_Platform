
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('culture_traditions', function (Blueprint $table) {
            $table->id();

            $table->foreignId('culture_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('name');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('culture_traditions');
    }
};
