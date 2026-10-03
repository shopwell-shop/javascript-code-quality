import DomAccessHelper from "./dom-access-helper.js";
import HttpClient from "./http-client.js";
import MigratePluginManager from "./plugin-manager.js";
import QueryString from "./query-string.js";

export default {
	plugins: {
		"shopwell-storefront": {
			rules: {
				"migrate-plugin-manager": MigratePluginManager,
				"no-dom-access-helper": DomAccessHelper,
				"no-http-client": HttpClient,
				"no-query-string": QueryString,
			},
		},
	},
	rules: {
		"shopwell-storefront/migrate-plugin-manager": "error",
		"shopwell-storefront/no-dom-access-helper": "warn",
		"shopwell-storefront/no-http-client": "warn",
		"shopwell-storefront/no-query-string": "warn",
	},
};
