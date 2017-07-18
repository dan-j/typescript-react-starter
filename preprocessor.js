const tsc = require('typescript');
const babel = require('babel-core');
const tsConfig = require('./tsconfig.json');
const path = require('path');
module.exports = {
    process(src, filepath) {
        const originalFilepath = filepath;
        const isTs = filepath.endsWith('.ts');
        const isTsx = filepath.endsWith('.tsx');

        let sourceMapText = null;
        if (isTs || isTsx) {
            const transpileOutput = tsc.transpileModule(
                src,
                {
                    compilerOptions: Object.assign({}, tsConfig.compilerOptions, {
                        rootDir: './',
                    }),
                    fileName: filepath,
                }
            );

            src = transpileOutput.outputText;
            sourceMapText = transpileOutput.sourceMapText;
            // const sourceMapObject = JSON.parse(transpileOutput.sourceMapText);
            // sourceMapObject.sources[0] = path.basename(sourceMapObject.sources[0]);
            // sourceMapText = JSON.stringify(sourceMapObject);

            // update the path so babel can try and process the output
            filepath = filepath.substr(0, filepath.lastIndexOf('.')) + (isTs ? '.js' : '.jsx');
        }

        if (filepath.endsWith('.js') || filepath.endsWith('.jsx')) {
            const { code, map } = babel.transform(src, {
                sourceFileName: path.basename(filepath),
                filename: filepath.endsWith('x') ? filepath.substr(0, filepath.length - 1) : filepath,
                sourceMaps: true,
                inputSourceMap: JSON.parse(sourceMapText),
            });

            src = code;
            sourceMapText = JSON.stringify(map);
        }
        return {
            code: src,
            map: sourceMapText,
        };
    },
};
