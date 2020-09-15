module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'html',
    ],
    rules: {
        indent: [1, 4],
        'no-console': 'off',
        'import/no-anonymous-default-export': ['error', {
            allowArrowFunction: true,
            allowAnonymousClass: true,
            allowAnonymousFunction: true,
            allowLiteral: true,
            allowObject: false,
            allowArray: true,
        }],

    },
};
