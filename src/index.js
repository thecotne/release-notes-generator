const changelog = require('conventional-changelog')
const parseUrl = require('github-url-from-git')

module.exports = function (pluginConfig, {pkg}, cb) {
  const repository = pkg.repository ? parseUrl(pkg.repository.url) : null

  changelog({
    version: pkg.version,
    repository: repository,
    preset: 'angular'
  })
  .on('data', data => {
    cb(null, data.toString())
  })
  .on('error', err => {
    cb(err, null)
  })
}
