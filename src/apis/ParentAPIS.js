import axios from "axios";

export const getParentList = async () => {

  const res = await axios.get(`http://localhost:8081/api/parent/list`)

  return res.data

}

export const getParentInfo = async (id) => {

  const res = await axios.get(`http://localhost:8081/api/parent/${id}`)

  return res.data

}

export const updateParentInfo = async (data) => {

  const res = await axios.put(`http://localhost:8081/api/parent/modify`, data)

  return res.data

}

export const softDeleteParentInfo = async (id) => {

  const res = await axios.delete(`http://localhost:8081/api/parent/delete/${id}`)

  return res.data

}
