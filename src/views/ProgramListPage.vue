<template>
  <DefaultLayout>

  </DefaultLayout>
</template>

<script setup>
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getProgramLists} from "@/apis/api";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute()
const router = useRouter()
const fetchProgramLists = async () => {
  console.log(route.query)
  const searchOptions = {
    keyword: route.query.keyword || "",
    condition: route.query.condition || "title",
    order: route.query.order || "newest",
    subCategoryId: route.query.id || 0
  }
  const data = await getProgramLists(searchOptions)
  console.log(data);
}

onMounted(() => {
  fetchProgramLists();
})

router.beforeEach((to, from, next) => {
  console.log(to)
})
</script>

<style scoped>

</style>
