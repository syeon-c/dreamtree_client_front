<template>
<DefaultLayout>
  <vue-word-cloud
    style="
    height: 480px;
    width: 640px;
  "
    :words="words"
    :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
    font-family="Roboto"
  >
    <template v-slot="{text, weight, word}">
      <div :title="weight" style="cursor: pointer;" @click="() => onClickWord(word)">
        {{ text }}
      </div>
    </template>
  </vue-word-cloud>
</DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getWordCloudInfo} from "@/apis/api";
import consts from "@/consts/const";

const router = useRouter()

const words = ref([])

const fetchWordCloudInfo = async () => {
  const data = await getWordCloudInfo()
  data.map((item) => {
    //[부카테고리이름, 개수, 부카테고리id]
    words.value.push([item.subCategoryName, item.count, item.subCategoryId])
  })
  console.log(data);
}

// 워드클라우드의 단어 클릭시
const onClickWord = (word) => {
  //[부카테고리이름, 개수, 부카테고리id]
  const subCategoryId = word[2]
  router.push({
    name: consts.PROGRAM_LIST_PAGE,
    query: {
      id: subCategoryId
    }
  })
}


onMounted(() => {
  fetchWordCloudInfo()
})

</script>

<style scoped>

</style>
