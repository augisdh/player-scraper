'use strict'

const sendData = (name, room, year, type) => {
  fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({playerName: name, pokerRoom: room, year: year, tournamentType: type})
  }).then((res) => {
    if (res.status === 200) {
      console.log('Data send')
    }
  }).catch((err) => {
    console.log(err)
  })
}

export default {sendData}
