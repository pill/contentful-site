import client from './api'
console.log("hello", process.env.API_BASE_URL, client);

const q = {
  content_type: 'post'
}

const entries = client.getEntries(q).then((res) => {
    console.log(res)
    res.items.map((item) => {
      console.log(item.fields.title)
    })
  })
  .catch(e=>console.log('error',e))

