const path = require("path");


module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: ['@storybook/addon-knobs/register', '@storybook/addon-a11y/register'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader", 
                {
                    loader: "css-loader",
                    options: { 
                        localsConvention: "dashesOnly",
                        modules: {
                            localIdentName: '[local]-[hash:base64:5]',
                        }
                       
                    }
                },
                "sass-loader"],
            include: path.resolve(__dirname, "../")
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]]
            }
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};