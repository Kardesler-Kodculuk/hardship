const path = require("path");

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@hardship": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@services": path.resolve(__dirname, "src/services"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	};

	return config;
};