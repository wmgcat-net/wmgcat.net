import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts"
	]),
	{
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
			"no-tabs": "off"
		}
	}
]);

export default eslintConfig;
