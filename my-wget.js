const axios = require('axios')
const fsPromises = require('fs/promises')

const MyGetRequest = async () => {
  if (process.argv.length !== 3) {
    console.log('Usage: node my-wget.js "url"')
    process.exit(1)
  } else {
    try {
      const response = await axios.get(process.argv[2])
      await fsPromises.writeFile('index.html', response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
}
MyGetRequest()