const webpack = require('webpack')
const config = require('../webpack.config')
const chalk = require('chalk')
const compiler =  webpack(config)

compiler.run((...params) => {
    console.log(chalk.green(...params))
    require('../dist/bundle.js')
})