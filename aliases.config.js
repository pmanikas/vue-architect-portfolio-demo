const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@src': 'src',
  '@views': 'src/views',
  '@partials': 'src/partials',
  '@components': 'src/components',
  '@ui-components': 'src/ui-components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@router': 'src/router',
  '@data' : 'src/data'
}

module.exports = {
  webpack: {}
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
}
