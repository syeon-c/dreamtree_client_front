<template>
  <v-select
    class="ma-1"
    style="max-width: 70%"
    v-model="categoryInfo"
    label="부 카테고리"
    :items="subCategoryList"
    @update:modelValue="onUpdateSubCategoryValue"
    return-object
  ></v-select>
</template>

<script setup>
import {ref, watch} from "vue";

const categoryInfo = ref()
const props = defineProps(['subCategoryList'])
const emits = defineEmits(['updateSubCategory'])
const subCategoryList = ref([])

watch(() => props.subCategoryList, (list) => {
  categoryInfo.value = null
  subCategoryList.value = []
  list.map(item => {
    subCategoryList.value.push({
      title: item.subCategoryName,
      id: item.subCategoryId
    })
  })
});

const onUpdateSubCategoryValue = (subCategoryObject) => {
  emits('updateSubCategory', subCategoryObject.id)
}
</script>

<style scoped>

</style>
