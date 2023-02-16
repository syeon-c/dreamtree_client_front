<template>
  <v-select
    class="ma-1"
    style="max-width: 30%"
    v-model="mainCategory"
    label="주 카테고리"
    :items="mainCategoryList"
    @update:modelValue="() => temp(mainCategory)"
  ></v-select>
</template>

<script setup>

import {getHomeCategories} from "@/apis/api";
import {onMounted, ref} from "vue";
const mainCategory = ref();
const mainCategoryList = ref([]);
const emits = defineEmits(['mainCategory'])
const fetchCategories = async () => {
  const res = await getHomeCategories();
  console.log(res)
  res.map(item => {
    mainCategoryList.value.push(item.categoryName)
  })
}

const temp = async (category) => {
  console.log(category)
}
onMounted(() => {
  fetchCategories()
})

</script>

<style scoped>

</style>
