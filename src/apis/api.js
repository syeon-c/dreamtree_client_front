import axios from "axios";
import consts from "@/consts/const";

export const getHomeCategories = async () => {
  try{
    const res = await axios.get(`${consts.DOMAIN}/api/category/layout`)

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const getProgramLists = async (searchOptions) => {
  try{
    const res = await axios.get(`${consts.DOMAIN}/api/program/`, {
      params: searchOptions
    })

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

/*** 임성현 ver.0.1 ***/
export const getStudentLists = async (keyword, page, size) => {

  let resultCondition = keyword.condition;

  if(resultCondition == 'total') {

    resultCondition = 'nickname,email,authState'
  }

  try{
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

export const getStudentInfo = async (id) => {

  try{
    const res = await axios.get(`${consts.DOMAIN}/api/students/${id}`)

    return res.data
  } catch (e) {
    console.log(e)

    return
  }
}

