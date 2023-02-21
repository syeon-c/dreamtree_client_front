import axios from "axios";
import consts from "@/consts/const";


/*** 임성현 ver.0.1 ***/

// 메일 조회
export const getMail = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/mail/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

// 보낸 메일
export const getToEmail = async (toEmail) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/mail/toEmail`, {
      params: {
        ...toEmail
      }
    })

    return res.data
  } catch (e) {

    return
  }
}

// 받은 메일
export const getFromEmail = async (fromEmail) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/mail/fromEmail/`, {
      params: {
        ...fromEmail
      }
    })

    return res.data
  } catch (e) {

    return
  }
}

// 메일 쓰기
export const writeEmail = async (mail) => {

  console.log("result Mail: ", mail)

  try {
    const res = await axios.post(`${consts.DOMAIN}/api/mail/writeEmail`, mail)

    return res.data
  } catch (e) {

    return
  }
}

// 메일 삭제
export const removeEmail = async (id) => {

  try {
    const res = await axios.put(`${consts.DOMAIN}/api/mail/remove/`, id)

    return res.data
  } catch (e) {

    return
  }
}

// 대학 인증 요청
export const authCollege = async (college) => {

  try {
    const res = await axios.post(`${consts.DOMAIN}/api/students/file/`, college)

    return res.data
  } catch (e) {

    return
  }
}
