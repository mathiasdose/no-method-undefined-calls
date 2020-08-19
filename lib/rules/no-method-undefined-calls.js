/**
 * @fileoverview ...
 * @author Mathias
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Reports usage of class method calls that is not defined.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        function parentIsCallExpression(parent) {
            return parent && parent.type === 'CallExpression';
        }

        function getClassBody(ancestors) {
            return ancestors.find(a => a.type === 'ClassBody');
        }

        return {

            MemberExpression(node) {
                if (!node.object || node.object === 'ThisExpression')
                    return;
                if (!node.property || node.property.type !== 'Identifier' || !node.property.name)
                    return;
                let ancestors = context.getAncestors();
                if (!ancestors)
                    return;
                let parent = ancestors[ancestors.length - 1];
                if (!parentIsCallExpression(parent))
                    return;
                let classBody = getClassBody(ancestors);
                if (!classBody)
                    return;

                let methodCalled = node.property.name;
                let classMethods = classBody.body.filter(b => b.type === 'MethodDefinition');
                let anyMethodIsMethodCalled = classMethods.some(cm => cm.key.name === methodCalled);

                if (!anyMethodIsMethodCalled) {
                    context.report({
                        node,
                        message: 'No undeclared this function calls'
                    });
                }
            }

        };
    }
};
