import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  allowSyntheticDefaultImports: true,
  image: {
    domain: 'https://cdnjs.cloudflare.com/ajax/',
  }
});