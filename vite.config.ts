import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from "vite-plugin-svgr";
import prerender from "@prerenderer/rollup-plugin";

export default defineConfig({
	plugins: [react(), viteTsconfigPaths(), svgrPlugin(),    
        prerender({
            routes: ["/", "/intro", "/intro/hobby", "/profile"],
            renderer: "@prerenderer/renderer-puppeteer",
            server: {
              port: 3000,
              host: "localhost",
            },
            rendererOptions: {
              maxConcurrentRoutes: 1,
              renderAfterTime: 500,
            },
            postProcess(renderedRoute) {
              renderedRoute.html = renderedRoute.html
                .replace(/http:/i, "https:")
                .replace(
                  /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
                  "https://yoonzeen-seo-test.netlify.app/"
                );
            },
        }),
    ],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            nested: path.resolve(__dirname, 'dist/nested/index.html'),
          },
        },
    },
});