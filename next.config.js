const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  webpack(config, options) {
    // Add SVGR Loader
    // ========================================================
    // Use at least one of the two following approaches:

    // Approach 1: Handle SVGs as components (with SVGR)
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md)x?$/] }, // For .js, .ts, and .mdx files
      use: ["@svgr/webpack"],
    });

    // Approach 2: Handle SVGs as static files (without SVGR)
    // Remove if using SVGR approach above
    /*
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images/',
          outputPath: 'static/images/',
          name: '[name]-[hash].[ext]',
          esModule: false // this line is needed to avoid issues with the <img> tag
        }
      }]
    });
    */

    // Return the modified config
    return config;
  },
});
