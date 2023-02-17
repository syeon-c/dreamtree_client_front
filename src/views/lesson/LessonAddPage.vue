<template>
  <DefaultLayout>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            v-model="programSelect"
            label="주 카테고리"
            :items="mainCategoryList"
            @update:modelValue="onUpdateCategoryValue"
            return-object
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
      </v-row>

    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

</script>

<style scoped>
.form-container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
