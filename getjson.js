function getJSON(url, useJSON=true) {
  return new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    if (useJSON) {
      client.responseType = 'json'
      client.setRequestHeader('Accept', 'application/json')
    }
    client.send()
  })
}