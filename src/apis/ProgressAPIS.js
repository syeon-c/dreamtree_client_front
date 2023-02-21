import axios from "axios";

export const getProgressList = async (id) => {

  const res = await axios.get(`http://localhost:8081/api/progress/${id}`)

  return res.data

}
