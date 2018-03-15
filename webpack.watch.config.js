const baseWebpackConfig = require("./webpack.config");

module.exports = [
  Object.assign({}, baseWebpackConfig[0], {
    "watch" : true,
    "watchOptions"  : {
      "poll"  : true
    }
  }),
  Object.assign({}, baseWebpackConfig[1], {
    "watch" : true,
    "watchOptions"  : {
      "poll"  : true
    }
  })
]
