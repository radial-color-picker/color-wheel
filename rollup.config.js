import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const outputDir = 'dist/color-wheel';

const banner = `/**
 * radial-color-picker/color-wheel v${pkg.version}
 *
 * https://github.com/radial-color-picker/color-wheel
 *
 * Copyright (c) 2018-present, Rosen Kanev
 * Released under the MIT License.
 */`;

export default [
    {
        input: 'src/main.js',
        output: {
            name: 'colorWheel',
            file: outputDir + '.umd.js',
            format: 'umd',
            banner,
        },
        plugins: [babel()],
    },
    {
        input: 'src/main.js',
        output: {
            name: 'colorWheel',
            file: outputDir + '.umd.min.js',
            format: 'umd',
            banner,
        },
        plugins: [
            babel(),
            terser({
                output: {
                    comments(node, { value, type }) {
                        if (type === 'comment2') {
                            // multiline comment
                            return value.includes('Copyright (c) 2018-present');
                        }
                    },
                },
            }),
        ],
    },
    {
        input: 'src/main.js',
        output: [
            { file: outputDir + '.cjs.js', format: 'cjs', banner, exports: 'default' },
            { file: outputDir + '.esm.js', format: 'esm', banner },
        ],
        plugins: [babel()],
    },
];
