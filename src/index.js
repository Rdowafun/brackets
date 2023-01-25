module.exports = function check(str, bracketsConfig) {
  let length = str.length
  for (let i = 0; i < length; i++) {
    bracketsConfig.map(e => {
      const config = e.join('')
      if (str.includes(config)) str = str.replace(config, "")
      return config;
    })
  }
  return str.length ? false : true
}