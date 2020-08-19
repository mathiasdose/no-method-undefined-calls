/**
 * @fileoverview ...
 * @author Mathias
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-method-undefined-calls"),

    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6
    }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-method-undefined-calls", rule, {

    valid: [`
        class MyClass {
            myMethod1() {
                this.myMethod2();
            }
            myMethod2() {
                
            }
        }
        `,
        `
        function myFunction() {
            this.myMethod2();
        }
        `
    ],

    invalid: [
        {
            code: `
            class MyClass {
                myMethod1() {
                  this.myMethod2();
                }
              }
            `,
            errors: [{
                message: "No undeclared this function calls",
                type: "MemberExpression"
            }]
        }
    ]
});
