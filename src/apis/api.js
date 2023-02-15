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

export const getWordCloudInfo = async () => {
  try {
    const res = await axios.get(`${consts.DOMAIN}/api/program/wordcloud`)

    return res.data
  } catch (e){
    console.log(e)
    return
  }
}
