import butternut from 'rollup-plugin-butternut';

export default [
    {
        input: 'src/main.js',
        output: { name: 'colorWheel', file: 'dist/color-wheel.umd.js', format: 'umd' }
    },
    {
        input: 'src/main.js',
        output: { name: 'colorWheel', file: 'dist/color-wheel.umd.min.js', format: 'umd' },
        plugins: [butternut()]
    },
    {
        input: 'src/main.js',
        output: [
            { file: 'dist/color-wheel.cjs.js', format: 'cjs' },
            { file: 'dist/color-wheel.esm.js', format: 'es' }
        ]
    }
];
