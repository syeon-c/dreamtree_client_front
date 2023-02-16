<template>
  <DefaultLayout>

    <RequestListComponent
      @movePage="movePage"
      @onClickMoveRequestDetailPage="moveRequestDetailPage"
      :searchCondition="searchCondition"
      :pNum="pNum"
      :pSize="pSize"
      :key="componentKey"
    />

  </DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RequestListComponent from "@/components/request/RequestListComponent.vue";
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

const componentKey = ref(0)

// 페이징 처리 위한 설정값
const pNum = ref(route.query.page || 1)
const pSize = ref(route.query.size || 10)

const searchCondition = ref({ keyword: '', condition: ''})

const movePage = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "RequestListPage",
    query: {
      ...searchCondition.value,
      page: pNum.value,
      size: pSize.value
    }
  })

}

const moveRequestDetailPage = (id) => {

  console.log(id)

  router.push( { name: 'RequestDetailPage', params: {id: id} })

}

router.beforeEach((to, from, next) => {

  pSize.value = to.query.size
  pNum.value = to.query.page

  searchCondition.value.keyword = to.query.keyword || ''
  searchCondition.value.condition = to.query.condition || ''

  if (to.name == "RequestListPage") componentKey.value++

  next()
})


</script>

<style scoped>

</style>
