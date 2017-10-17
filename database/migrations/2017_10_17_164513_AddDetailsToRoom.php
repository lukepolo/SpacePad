<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDetailsToRoom extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rooms', function(Blueprint $table) {
            $table->string('type')->nullable();
            $table->json('features')->nullable();
            $table->integer('capacity')->nullable()->default(0);
            $table->longText('comments')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rooms', function(Blueprint $table) {
            $table->dropColumn('type');
            $table->dropColumn('features');
            $table->dropColumn('capacity');
            $table->dropColumn('comments');
        });
    }
}
