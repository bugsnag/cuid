const sharedOutput = {
    format: 'cjs',
    dir: 'dist',
    preserveModules: true,
    exports: 'default',
    generatedCode: {
        preset: 'es2015'
    }
};

export default [
    {
        external: ['os'],
        input: 'index.mjs',
        output: sharedOutput
    },
    {
        input: 'lib/fingerprint.browser.mjs',
        output: {
            ...sharedOutput,
            dir: 'dist/lib'
        }
    },
    {
        input: 'lib/fingerprint.react-native.mjs',
        output: {
            ...sharedOutput,
            dir: 'dist/lib'
        }
    }
];
