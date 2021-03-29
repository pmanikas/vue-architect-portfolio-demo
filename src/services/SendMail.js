import axios from 'axios'

export let SendMail = (url, serial) => axios.post(url, serialize(serial))

function serialize(obj) {
  const str = []
  for (var p in obj) {
    str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
  }
  return str.join('&')
}
