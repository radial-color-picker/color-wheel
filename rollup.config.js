import butternut from 'rollup-plugin-butternut';
import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'src/main.js',
        output: { name: 'colorWheel', file: 'dist/color-wheel.umd.js', format: 'umd' },
        plugins: [
            babel({
                exclude: ['node_modules/**'],
            }),
        ]
    },
    {
        input: 'src/main.js',
        output: { name: 'colorWheel', file: 'dist/color-wheel.umd.min.js', format: 'umd' },
        plugins: [
            babel({
                exclude: ['node_modules/**'],
            }),
            butternut()
        ]
    },
    {
        input: 'src/main.js',
        output: [
            { file: 'dist/color-wheel.cjs.js', format: 'cjs' },
            { file: 'dist/color-wheel.esm.js', format: 'es' }
        ],
        plugins: [
            babel({
                exclude: ['node_modules/**'],
            })
        ]
    }
];
