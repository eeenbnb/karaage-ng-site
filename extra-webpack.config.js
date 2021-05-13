module.exports = {
  module: {
    rules: [
      {
        test: /module\.wcss$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      }
    ],
  },
}
