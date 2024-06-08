/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import react from '@vitejs/plugin-react'

export default defineConfig( {
  plugins: [ svelte(), svelteTesting(), react() ],
  test: {
    environment: 'jsdom',
    setupFiles: [ './vitest-setup.ts' ],
    css: true
  },
} );