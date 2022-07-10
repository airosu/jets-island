module.exports = {
    resolve: {
        // NOTE: This fallback is added to fix compatibility issues for storybook / webpack5
        fallback: {
            util: require.resolve('util/'),
        },
    },
}
