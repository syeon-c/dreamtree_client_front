<template>
  <v-list lines="three">

    <v-list-subheader>Parent Admin</v-list-subheader>

    <v-list-item
      v-for="info in infoList"
      :key="info.id"
      @click="() => emits(`onClickMoveInfoModifyPage`, info.id)"
    >
      <div class="d-flex flex-nowrap justify-space-between">
        <div class="d-flex flex-no-wrap ma-1">
          <v-avatar size="70px">
            <v-img src="https://randomuser.me/api/portraits/women/79.jpg"/>
          </v-avatar>

          <div style="margin-left: 15px;">
            <v-list-item-title v-text="info.email"></v-list-item-title>
            <div class="d-flex flex-no-wrap">
              <v-list-subheader> {{ info.nickname }}</v-list-subheader>
              <v-list-subheader> {{ info.birth }}</v-list-subheader>
            </div>
          </div>
        </div>

        <v-list-item-title>{{ info.password }}</v-list-item-title>

        <v-btn
          icon="fa-solid fa-delete-left"
          flat
          @click="() => deleteInfo(info.id)"
        >
        </v-btn>
      </div>
    </v-list-item>

  </v-list>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getParentList, softDeleteParentInfo} from "@/apis/ParentAPIS";

const props = defineProps(['movePage', 'pNum', 'pSize', 'searchCondition'])
const emits = defineEmits(['onClickMoveInfoModifyPage'])

const infoList = ref([])

const pageNum = ref(1)

const pageSize = ref(10)

/** 학부모 회원정보 전체 리스트 받아오기 **/
const fetchGetParentList = async () => {

  pageNum.value = parseInt(props.pNum)
  pageSize.value = props.pSize

  const data = await getParentList(props.searchCondition, pageNum.value, pageSize.value)

  infoList.value = data.dtoList
  console.log(infoList.value)

}

onMounted(() => {
  fetchGetParentList()
})

/** 회원 정보 삭제(soft) **/
const deleteInfo =  async (id) => {

  await softDeleteParentInfo(id)

}

</script>

<style scoped>

</style>
