<template>

  <default-layout>
    <SearchComponent @clickSearch="clickSearch" />
    <CollegeAuthManagementComponent
      @movePageNum="movePageNum"
      @moveCollegeAuthInfo="moveCollegeAuthInfo"
      @moveCertificateAuthInfo="moveCertificateAuthInfo"
      :searchKeyword="searchKeyword"
      :pNum="pNum"
      :pSize="pSize"
      :key="componentKey"
    />
  </default-layout>

</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SearchComponent from "@/components/admin/SearchComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import CollegeAuthManagementComponent from "@/components/admin/AuthManagementComponent.vue";

const router = useRouter()

const route = useRoute()

const componentKey = ref(0)

const searchKeyword = ref({ keyword: '', condition: 'total' })

const pNum = ref(route.query.page || 1)

const pSize = ref(route.query.size || 10)

const clickSearch = (search) => {
  console.log(search)
  searchKeyword.value.keyword = search.keyword
  searchKeyword.value.condition = search.condition
  router.push({name: "MemberManagementPage",
    query: {
      keyword: searchKeyword.value.keyword,
      condition: searchKeyword.value.condition,
      page: 1,
      size: 10
    }})
}

const movePageNum = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "CollegeAuthManagementPage",
    query: {
      ...searchKeyword.value,
      page: pNum.value,
      size: pSize.value
    }
  })
}

const moveCollegeAuthInfo = (id) => {

  console.log("info")

  router.push({ name: "CollegeAuthInfoPage",
    query: {
      id: id,
      page: pNum.value,
      size: pSize.value
    }
  })
}

const moveCertificateAuthInfo = (id) => {

  console.log("info")

  router.push({ name: "CertificateAuthInfoPage",
    query: {
      id: id,
      page: pNum.value,
      size: pSize.value
    }
  })
}


router.beforeEach((to, from, next)=> {

  pSize.value = to.query.size

  pNum.value = to.query.page

  searchKeyword.value.keyword = to.query.keyword || ''

  searchKeyword.value.condition = to.query.condition || 'total'

  if(to.name == 'MemberManagementPage') componentKey.value++

  next()
})
</script>

<style scoped>

</style>
