const database = {
  ['index.html']: '<html>Welcome to CodezUp</html>'
}

module.exports.get = (key, callback) => {
  setTimeout(() => {
    callback(database[key])
  }, 3000)
}