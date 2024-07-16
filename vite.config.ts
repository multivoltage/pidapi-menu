import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    VitePWA({
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,jpg,png,svg,webp,mp3,mp4,webmanifest}",
        ],
      },
      manifest: {
        theme_color: "#ffffff",
      },
      registerType: "autoUpdate",
      includeAssets: [
        "images/*.png",
        "images/*.jpg",
        "images/*.webp",
        "audio/*.mp3",
        "video/*.mp4",
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
