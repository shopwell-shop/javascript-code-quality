# Stylelint Rules for Shopwell Administration

This package provides custom stylelint rules for Shopwell Administration development.

## Installation

Install the package and its peer dependency `stylelint`:

```bash
npm install @shopwell-ag/admin-stylelint-rules stylelint --save-dev
```

## Usage

Add the plugin to your stylelint configuration file (e.g., `.stylelintrc.json`) and configure the rules you want to use.

```json
{
	"plugins": ["@shopwell-ag/admin-stylelint-rules"],
	"rules": {
		"@shopwell-ag/admin-stylelint-rules/wrong-scss-import": true
	}
}
```

## Rules

### `@shopwell-ag/admin-stylelint-rules/wrong-scss-import`

This rule prevents the use of the `.scss` file extension in `@import` statements that start with `~scss`. It encourages a consistent import style for shared SCSS resources.

This rule can automatically fix violations.

**Example of incorrect code for this rule:**

```scss
@import "~scss/variables.scss";
@import "~scss/mixins.scss";
```

**Example of correct code for this rule:**

```scss
@import "~scss/variables";
@import "~scss/mixins";
```
