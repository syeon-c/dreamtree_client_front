import axios from "axios";
import consts from "@/consts/const";


/*** 임성현 ver.0.1 ***/
export const getStudentLists = async (keyword, page, size) => {

  let resultCondition = keyword.condition;

  if(resultCondition == 'total') {

    resultCondition = 'nickname,email,authState'
  }

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/students`, {
      params: {
        keyword: keyword.keyword,
        condition: resultCondition,
        page: page,
        size: size
      }})

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const getStudentCollegeAuthLists = async (keyword, page, size) => {

  let resultCondition = keyword.condition;

  if(resultCondition == 'total') {

    resultCondition = 'nickname,email,authState'
  }

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/students/college`, {
      params: {
        keyword: keyword.keyword,
        condition: resultCondition,
        page: page,
        size: size
      }})

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const getStudentCertificateAuthLists = async (keyword, page, size) => {

  let resultCondition = keyword.condition;

  if(resultCondition == 'total') {

    resultCondition = 'nickname,email,authState'
  }

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/students/certificate`, {
      params: {
        keyword: keyword.keyword,
        condition: resultCondition,
        page: page,
        size: size
      }})

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const getStudentInfo = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/students/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const getCollegeAuthInfo = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/students/college/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const getCertificateAuthInfo = async (id) => {

  try {
    const res = await axios.get(`${consts.DOMAIN}/api/certificate/details/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const modifyCollegeAuthState = async (id, authState) => {

  const result = {id: id, authState: authState}

  try {
    const res = await axios.put(`${consts.DOMAIN}/api/students/state`, result)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const modifyCertificateAuthState = async (id, authState) => {

  const result = {id: id, authState: authState}

  try {
    const res = await axios.put(`${consts.DOMAIN}/api/certificate/state`, result)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}
export const modifyStudent = async (student) => {

  try {
    const res = await axios.put(`${consts.DOMAIN}/api/students/modify`, student)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

export const removeStudent = async (id) => {

  try {
    const res = await  axios.put(`${consts.DOMAIN}/api/students/remove/${id}`)

    return res.data

  } catch (e) {

    return
  }
}
