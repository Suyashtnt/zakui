import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: [
        {
            builder: "mkdist",
            input: "./src",
            outDir: "./dist",
            esbuild: {
                jsx: "automatic",
            }
        },
    ],
    externals: ['react', 'react-dom'],
    name: "zakui",
    declaration: "compatible"
})