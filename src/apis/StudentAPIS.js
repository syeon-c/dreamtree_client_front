import axios from "axios";
import consts from "@/consts/const";

/** 최서연 ver.0.1 **/

/** 대학생 회원 ID로 학생 정보 조회 **/
export const getStudentInfo = async (id) => {

  try {

    const res = await axios.get(`${consts.DOMAIN}/api/students/${id}`)
    return res.data

  } catch (e) {

    console.log(e)
    return

  }

}

/** 대학생 회원 ID로 학생 정보 수정 **/
export const modifyStudentInfo = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/mail/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

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

// 내가 한 신고 리스트

export const myReportList = async (email) => {

  console.log(email)

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/report/myReport`, {
      params: {
        ...email
      }
    })

    return res.data
  } catch (e) {

    return
  }
}

// 신고 조회
export const getReport = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/report/member/${id}`)

    return res.data
  } catch (e) {

    return
  }
}

// 신고 삭제
export const removeReport = async (id) => {

  try {
    const res = await axios.put(`${consts.DOMAIN}/api/report/remove`, id)

    return res.data
  } catch (e) {

    return
  }
}

// 신고 하기
export const addReport = async (report) => {

  console.log("resilt:", report)

  try {
    const res = await axios.post(`${consts.DOMAIN}/api/report/write/`, report)

    return res.data
  } catch (e) {

    return
  }
}

// 프로그램 리스트
export const myProgramList = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/program/myProgram/${id}`)

    return res.data
  } catch (e) {

    return
  }
}

// 레슨 리스트
export const myLessonList = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/program/myLesson/${id}`)

    return res.data
  } catch (e) {

    return
  }
}
