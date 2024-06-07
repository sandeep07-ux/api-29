const randomStringGenerator = (len) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const lens = chars.length;
  let random = "";

  for (let i = 0; i < len; i++) {
    const push = Math.ceil(Math.random() * (lens - 1));
    random += chars[push]
  }
  return random
}

const deleteFile = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
  }
}

module.exports = {
  randomStringGenerator, 
  deleteFile
}

