import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import type { Plugin } from 'vite';

export default defineConfig(({ mode }) => {
  // Use '/stunning-goggles/' for production (GitHub Pages), '/' for development
  const base = mode === 'production' ? '/stunning-goggles/' : '/';

  // Plugin to inject base path into index.html
  const injectBasePath = (): Plugin => {
    return {
      name: 'inject-base-path',
      transformIndexHtml(html) {
        // Replace absolute paths with base-prefixed paths
        return html
          .replace(/href="\/manifest\.json"/g, `href="${base}manifest.webmanifest"`)
          .replace(/href="\/(assets\/[^"]+)"/g, (match, path) => `href="${base}${path}"`)
          .replace(/href="\/(apple-touch-icon\.png)"/g, (match, path) => `href="${base}${path}"`);
      },
    };
  };

  return {
    base,

    plugins: [
      react(),
      injectBasePath(),

      // PWA Plugin (Progressive Web App)
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],

        manifest: {
          name: 'LuckChain - Provably Fair Blockchain Gaming',
          short_name: 'LuckChain',
          description: 'Multi-game blockchain gaming platform with provably fair dice game',
          theme_color: '#0ea5e9',
          background_color: '#0f172a',
          display: 'standalone',
          scope: base,
          start_url: base,
          orientation: 'portrait',

          icons: [
            {
              src: `${base}pwa-192x192.png`,
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable'
            },
            {
              src: `${base}pwa-512x512.png`,
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ],

          categories: ['games', 'entertainment', 'finance'],
        },

        workbox: {
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|svg|gif)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30
                }
              }
            },
            {
              // Don't cache blockchain RPC calls
              urlPattern: /^https:\/\/.*\.rpc\..*/,
              handler: 'NetworkOnly'
            }
          ],
          skipWaiting: true,
          clientsClaim: true,
        },

        devOptions: {
          enabled: true,
          type: 'module',
        }
      })
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@types': path.resolve(__dirname, './src/types'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },

    server: {
      port: 3000,
      open: true,
    },

    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            wagmi: ['wagmi', 'viem'],
            reown: ['@reown/appkit', '@reown/appkit-adapter-wagmi'],
          },
        },
      },
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'wagmi', 'viem'],
    },
  };
});

