

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // Import the Vue plugin
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(), // Add Vue plugin here
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
