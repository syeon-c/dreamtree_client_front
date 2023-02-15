<template>

</template>

<script setup>
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {getProgramLists} from "@/apis/api";

const route = useRoute()

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

</script>

<style scoped>

</style>
