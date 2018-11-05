import axios from 'axios'

export let SendMail = (url, serial) => axios.post(
  url,         
  serialize(serial)
)

function serialize(obj) {
  var str = [];
  for(var p in obj) {
      if(obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
  }
  return str.join('&')
}