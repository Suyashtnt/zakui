// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
	rules: [["m-1", { margin: "1px" }]],

	shortcuts: {
		btnn: "bg-blue3 p5 text-white",
	},

	presets: [presetUno(), presetAttributify()],
});
