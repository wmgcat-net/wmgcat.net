import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importFsdPlugin from "eslint-plugin-import-fsd";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	importFsdPlugin.configs.recommended,
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts"
	]),
	{
		plugins: {
			"import-fsd": importFsdPlugin
		},
		settings: {
			fsd: {
				rootDir: "./src",
				aliases: {
					"@/*": "./src/*"
				}
			}
		},
		rules: {
			"quotes": [
				"error",
				"double",
				{
					avoidEscape: false,
					allowTemplateLiterals: false
				}
			],
			"array-bracket-spacing": [
				"error",
				"always"
			],
			"object-curly-spacing": [
				"error",
				"always"
			],
			"object-curly-newline": [
				"error",
				{
					ObjectPattern: {
						minProperties: 2
					}
				}
			],
			"max-lines": [
				"error",
				{
					max: 400,
					skipBlankLines: true,
					skipComments: true
				}
			],
			"comma-dangle": [
				"error",
				"never"
			],
			"no-tabs": "off",
			"import-fsd/no-denied-layers": "error"
		}
	}
]);

export default eslintConfig;
