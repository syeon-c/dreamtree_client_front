import axios from "axios";
import consts from "@/consts/const";
import {ca} from "vuetify/locale";

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
    const res = await axios.get(`${consts.DOMAIN}/api/program/wordcloud/`)

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const postProgramForm = async (studentId, curriculum, programForm) => {
  try {
    const programFormDTO = {
      ...programForm,
      studentId: 1,
      curriculumJson: JSON.stringify(curriculum),
    }
    console.log(programFormDTO)
    const res = await axios.post(`${consts.DOMAIN}/api/program/form/`, programFormDTO)
    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const postUpload = async (formData) => {
  try {
    console.log(formData)
    const res = await axios.post(`${consts.DOMAIN}/api/minio/upload`, formData)
    return res.data
  } catch (e){
    console.log(e)
    return
  }
}

export const deleteMinioImage = async (fileNameList) => {
  try {
    const res = await axios.delete(`${consts.DOMAIN}/api/minio`, {
      data: fileNameList
    })
    return res.data
  } catch (e){
    console.log(e)
    return
  }
}
