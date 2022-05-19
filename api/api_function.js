import axios from "axios"

const config = {
  method: 'post',
  url: 'http://18.218.229.67/paychap/gettoken?grant_type=client_credentials&client_secret=$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0&client_id=ITCLT11',
  data: {
    username: 'ITCLT11',
    password: '$1$WZVi4eh.$V5CEAhtD2Y1UJp0LQ.1KR0'
  }
}

async function getAccessToken() {
  const response = await axios(config)
  return console.log(response)
}

export default getAccessToken