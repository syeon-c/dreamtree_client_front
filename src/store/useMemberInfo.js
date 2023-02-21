import {ref} from "vue";
import {defineStore} from "pinia";
import consts from "@/consts/const";

const useMemberInfo = defineStore('useMemberInfo',() => {

  const memberInfo = ref({id: null, role: null})

  const getMemberInfo = () => {
    memberInfo.value.id = 1
    memberInfo.value.role = consts.ADMIN
    return memberInfo.value
  }

  return {memberInfo, getMemberInfo}
})

export default useMemberInfo
