const fsPromises = require('fs/promises')

const myReadFile = async () => {

  try {
    const txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    console.log(txt1.trim())
  } catch (e) {
    console.log(e.message)
  }
}

myReadFile()