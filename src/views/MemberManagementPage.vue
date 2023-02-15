<template>

  <DefaultLayout>
    <MemberManagementComponent
      @movePageNum="movePageNum"
      @moveStudentInfo="moveStudentInfo"
      :searchKeyword="searchKeyword"
      :pNum="pNum"
      :pSize="pSize"
      :key="componentKey"
    />
  </DefaultLayout>

</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MemberManagementComponent from "@/components/MemberManagementComponent.vue";
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()

const route = useRoute()

const componentKey = ref(0)

const searchKeyword = ref({ keyword: '', condition: 'total' })

const pNum = ref(route.query.page || 1)

const pSize = ref(route.query.size || 10)

const movePageNum = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "MemberManagementPage",
    query: {
      ...searchKeyword.value,
      page: pNum.value,
      size: pSize.value
    }
  })
}

const moveStudentInfo = (id) => {

  router.push({ name: "StudentInfoPage",
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
