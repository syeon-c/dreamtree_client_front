import axios from "axios";

export const getRequestList = async (keyword, page, size) => {

  const res = await axios.get(`http://localhost:8081/api/request/list`, {
    params: {
      keyword: keyword.keyword,
      condition: keyword.condition,
      page: page,
      size: size
    }
  })

  return res.data

}

export const getRequestDetail = async (id) => {

  const res = await axios.get(`http://localhost:8081/api/request/list/${id}`)

  return res.data

}

export const postRequest = async (data) => {

  const res = await axios.post(`http://localhost:8081/api/request/`, data)

  return res.data

}

export const putRequest = async (data) => {

  const res = await axios.put(`http://localhost:8081/api/request/modify`, data)

  return res.data

}
