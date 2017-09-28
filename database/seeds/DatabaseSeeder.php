<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (! \File::exists(storage_path('oauth-private.key'))) {
            Artisan::call('passport:install');
        }

        // $this->call(UsersTableSeeder::class);
    }
}
