import { postAxios, getAxios } from "../../lib/axios"


export const RegisterUser = async (data) => {
  return await postAxios('/user', data)
}

export const GetUser = async (url) => {
  // return await getAxios(`/user?email=${email}`)
  return await getAxios(url)

}