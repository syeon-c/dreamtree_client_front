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

export const getProgramLists = async (searchOptions, pageInfo) => {
  try{
    const params = {
      ...searchOptions,
      page: pageInfo.pageNum,
      size: pageInfo.pageSize
    }
    const res = await axios.get(`${consts.DOMAIN}/api/program/`, {
      params: params
    })

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const getWordCloudInfo = async () => {
  try {
    const res = await axios.get(`${consts.DOMAIN}/api/program/wordcloud`)

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const postProgramForm = async (programForm) => {
  try {
    const programFormDTO = {
      ...programForm,
      studentId: 1,
      subCategoryId: 2
    }
    const res = await axios.post(`${consts.DOMAIN}/api/program/wordcloud`)

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}
