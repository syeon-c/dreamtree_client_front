<template>
  <v-select
    class="ma-1"
    style="max-width: 70%"
    v-model="categoryInfo"
    label="부 카테고리"
    :items="['total', 'title', 'writer']"
  ></v-select>
</template>

<script>
export default {
  name: "SubCategoryComponent"
}
</script>

<style scoped>

</style>
