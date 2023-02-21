import axios from "axios";
import consts from "@/consts/const";

export const getAttendanceInfo = async (id, role) => {
  try {
    const res = await axios.get(`${consts.DOMAIN}/api/attendance/${role}`, {
      params: {
        id: id
      }
    })
    return res.data
  } catch (e){
    console.log(e)
    return
  }
}
export const updateAttendanceStatus = async (attendanceDTOList) => {
  console.log(attendanceDTOList)
  try {
    const res = await axios.put(`${consts.DOMAIN}/api/attendance`, attendanceDTOList)
    return res.data
  } catch (e){
    console.log(e)
    return
  }
}
