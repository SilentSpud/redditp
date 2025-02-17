import { join } from "path";

const publicFolders = [
    '.well-known',
    'css',
    'images'
];

const server = Bun.serve({
    port: process.env.PORT || 8080,
    async fetch(req) {
        const url = new URL(req.url);
        
        // Handle static files from public folders
        for (const folder of publicFolders) {
            if (url.pathname.startsWith(`/${folder}/`)) {
                const filePath = join(import.meta.dir, url.pathname);
                return new Response(Bun.file(filePath));
            }
        }

        // Serve index.html for all other routes
        return new Response(Bun.file(join(import.meta.dir, "index.html")));
    },
});

console.log(`Web server listening at: http://localhost:${server.port}`);