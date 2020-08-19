# eslint-plugin-no-method-undefined-calls

Reports usage of class method calls that is not defined.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-method-undefined-calls`:

```
$ npm install eslint-plugin-no-method-undefined-calls --save-dev
```


## Usage

Add `no-method-undefined-calls` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-method-undefined-calls"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-method-undefined-calls/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





