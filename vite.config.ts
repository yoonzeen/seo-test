import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from "vite-plugin-svgr";
import prerender from "@prerenderer/rollup-plugin";

export default defineConfig(({ mode }) => {
    return {
        plugins: [react(), viteTsconfigPaths(), svgrPlugin(),    
            prerender({
                routes: ["/", "/intro", "/intro/hobby", "/category/1", "/category/2", "/category/3", "/profile/abcd"],
                renderer: "@prerenderer/renderer-puppeteer",
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
    }
});