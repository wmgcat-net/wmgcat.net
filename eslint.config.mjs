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
				"warn",
				"double",
				{
					avoidEscape: false,
					allowTemplateLiterals: false
				}
			],
			"array-bracket-spacing": [
				"warn",
				"always"
			],
			"object-curly-spacing": [
				"warn",
				"always"
			],
			"object-curly-newline": [
				"warn",
				{
					ObjectPattern: {
						minProperties: 2
					}
				}
			],
			"max-lines": [
				"warn",
				{
					max: 400,
					skipBlankLines: true,
					skipComments: true
				}
			],
			"comma-dangle": [
				"warn",
				"never"
			]
		}
	}
]);

export default eslintConfig;
