import axios from "axios"

export const createOrUpdateUser = async (authtoken) => {
  let api = "http://localhost:8000/api/create-or-update-user"
  return await axios.post(
    api,
    {},
    {
      headers: {
        authtoken: authtoken,
      },
    }
  )
}
