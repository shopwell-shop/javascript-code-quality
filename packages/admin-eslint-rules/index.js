import { compareVersions } from "compare-versions";
import requireExplicitEmits from "./6.7/require-explict-emits.js";
import noVuex from "./6.7/state-import.js";
import noSnippetImport from "./no-snippet-import.js";
import noSrcImport from "./no-src-import.js";
import noSwExtensionOverride from "./no-sw-extension-override.js";

let rules = {
	"no-src-import": noSrcImport,
	"no-snippet-import": noSnippetImport,
	"no-sw-extension-override": noSwExtensionOverride,
	"no-shopwell-store": noVuex,
	"require-explict-emits": requireExplicitEmits,
};

if (process.env.SHOPWELL_VERSION) {
	rules = Object.fromEntries(
		Object.entries(rules).filter(([_, rule]) => {
			if (!rule.meta?.minShopwellVersion) {
				return true;
			}

			return compareVersions(process.env.SHOPWELL_VERSION, rule.meta.minShopwellVersion) >= 0;
		}),
	);
}

const config = {
	plugins: {
		"shopwell-admin": {
			rules: rules,
		},
	},
	rules: {},
};

Object.keys(rules).forEach((ruleName) => {
	config.rules[`shopwell-admin/${ruleName}`] = "error";
});

export default config;
