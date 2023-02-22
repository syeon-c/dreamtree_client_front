import axios from "axios";

export const postAuthCode = async (code) => {

  const res = await axios.post(`http://localhost:8081/api/kakaoLogin/`, { code: code })
  return res.data

}

export const kakaoLogin = async (data) => {

  console.log(data)
  const res = await axios.post(`http://localhost:8081/api/kakaoLogin/signIn`, data)
  return res.data

}

export const kakaoSignUp = async (data) => {

  console.log("sign up....", data)
  const res = await axios.post(`http://localhost:8081/api/kakaoLogin/signUp`, data)
  return res.data

}
