const visit = require('unist-util-visit');

const plugin = (options) => {
    const transformer = async (ast) => {
        let number = 1;
        visit(ast, 'heading', (node) => {
            if (node.depth === 2 && node.children.length > 0) {
                node.children.unshift({
                    type: 'text',
                    value: `Section ${number}. `,
                });
                number++;
            }
        });
    };
    return transformer;
};

// const plugin = (options) => {
//     const transformer = async (ast, vfile) => {
//         ast.children.unshift({
//             type: 'text',
//             value: `The current file path is ${vfile.path}`,
//         });
//     };
//     return transformer;
// };

module.exports = plugin;