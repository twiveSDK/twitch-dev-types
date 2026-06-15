import {defineConfig} from "eslint/config";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";

export default defineConfig(
    ...tseslint.configs.recommended,
    {
        ignores: ["node_modules", "**/*.d.ts", "**/*.js", "**/*.map", "eslint.config.ts"],
    },
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            unicorn,
        },
        files: ["**/*.ts"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                warnOnUnsupportedTypeScriptVersion: false,
                allowAutomaticSingleRunInference: true,
                project: "tsconfig.json",
            },
        },
        rules: {
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/consistent-type-definitions": [
                "error",
                "interface"
            ],
            "typescript-sort-keys/interface": "off",
            "typescript-sort-keys/string-enum": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-empty-object-type": [
                "error",
                {
                    allowInterfaces: "always"
                },
            ],
            "@typescript-eslint/no-duplicate-enum-values": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_"
                },
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "interface",
                    format: ["PascalCase"]
                },
                {
                    selector: "typeAlias",
                    format: ["PascalCase"]
                },
                {
                    selector: "enum",
                    format: ["PascalCase"]
                },
            ],
            "import/extensions": "off",
            "no-undef": "off",
            "no-empty-interface": "off",
            "quotes": [
                "error",
                "double",
                {
                    avoidEscape: true
                }
            ],
            "unicorn/filename-case": [
                "error",
                {
                    case: "camelCase"
                },
            ],
            "no-multi-spaces": "error",
            "comma-dangle": [
                "error",
                "always-multiline"
            ],
            "object-curly-spacing": [
                "error",
                "never"
            ],
            "no-restricted-syntax": [
                "error",
                {
                    selector: "Program > ClassDeclaration",
                    message: "No classes in type files."
                },
                {
                    selector: "Program > FunctionDeclaration",
                    message: "No functions in type files."
                },
                {
                    selector: "Program > VariableDeclaration",
                    message: "No variable declarations in type files."
                },
                {
                    selector: "Program > ExpressionStatement",
                    message: "No expressions in type files."
                },
                {
                    selector: "Program > IfStatement",
                    message: "No if-statements in type files."
                },
                {
                    selector: "Program > ForStatement",
                    message: "No for-loops in type files."
                },
                {
                    selector: "Program > WhileStatement",
                    message: "No while-loops in type files."
                },
                {
                    selector: "Program > SwitchStatement",
                    message: "No switch-case-statements in type files."
                },
                {
                    selector: "Program > ReturnStatement",
                    message: "No return-statements in type files."
                },
                {
                    selector: "ExportDefaultDeclaration",
                    message: "No default export in type files."
                },
            ],
        },
    }
);
