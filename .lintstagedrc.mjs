export default {
    '*.{ts,tsx}': ['eslint --fix --no-warn-ignored', 'prettier --write'],
    '*.{js,mjs,json,css,html,md,yml,yaml}': 'prettier --write --ignore-unknown',
};
