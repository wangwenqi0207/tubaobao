module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['warn', 4],
        semi: 0,
        'global-require': 0,
        'no-trailing-spaces': 0, // 允许行空格
        'no-unused-vars': 0, // 允许行空格
        'arrow-parens': 0, // 允许行空格
    },
}
