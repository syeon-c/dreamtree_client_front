<template>
  <v-select
    class="ma-1"
    style="max-width: 30%"
    v-model="mainCategory"
    label="주 카테고리"
    :items="mainCategoryList"
    @update:modelValue="onUpdateCategoryValue"
    return-object
  >
  </v-select>
</template>

<script setup>

import {getLayoutInfo} from "@/apis/api";
import {onMounted, ref} from "vue";
const mainCategory = ref();
const mainCategoryList = ref([]);
const subCategoryList = ref([])
const emits = defineEmits(['mainCategoryChange'])

const onUpdateCategoryValue = (mainCategoryObject) => {
  const selectedCategoryIndex = mainCategoryObject.index
  emits('mainCategoryChange', subCategoryList.value[selectedCategoryIndex])
}

const fetchCategories = async () => {
  subCategoryList.value = []
  const res = await getLayoutInfo();
  res.categories.map((item, index) => {
    mainCategoryList.value.push({
      title: item.categoryName,
      index: index
    })
    subCategoryList.value.push(item.subCategoryLists)
  })
}

onMounted(() => {
  fetchCategories()
})

</script>

<style scoped>
.form-container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
