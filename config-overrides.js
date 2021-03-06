const path = require("path");

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@hardship": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@controller": path.resolve(__dirname, "src/controller"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@services": path.resolve(__dirname, "src/services"),
		},
	};

	return config;
};