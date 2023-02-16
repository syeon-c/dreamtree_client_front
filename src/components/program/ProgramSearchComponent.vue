<template>
    <v-card class="search-container">
      <div class="mt-3" style="min-width: 20%">
        <v-select
          v-model="searchOptions.condition"
          label="검색조건"
          :items="['total', 'title']"
        ></v-select>
      </div>
      <div class="mt-3" style="min-width: 60%">
        <v-text-field
          v-model="searchOptions.keyword"
          label="Search"
          single-line
          hide-detail
        ></v-text-field>
      </div>
      <v-btn
        @click="() => emits('clickSearch', searchOptions)"
        append-icon="fa-sharp fa-solid fa-magnifying-glass" variant="plain">
        search
      </v-btn>
    </v-card>

</template>

<script setup>
  import {ref} from "vue";
  const emits = defineEmits(['clickSearch'])
  const searchOptions = ref({
    condition: "title",
    keyword: "",
    order: "newest"
  })

</script>

<style scoped>

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
