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
        input: 'index.js',
        output: sharedOutput
    },
    {
        input: 'lib/fingerprint.browser.js',
        output: {
            ...sharedOutput,
            dir: 'dist/lib'
        }
    },
    {
        input: 'lib/fingerprint.react-native.js',
        output: {
            ...sharedOutput,
            dir: 'dist/lib'
        }
    }
];
