import { postAxios, getAxios } from "../../lib/axios"


export const RegisterUser = async (data) => {
  return await postAxios('/user', data)
}

export const GetUser = async (email) => {
  return await getAxios('/user', email)
}