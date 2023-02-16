<template>
  <DefaultLayout>

    <v-tabs
      v-model="tab"
      bg-color="transparent"
      grow
    >
      <v-tab value="1">대학생</v-tab>
      <v-tab value="2">학부모</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="1">
        <HomeComponent/>
      </v-window-item>

      <v-window-item value="2">
        <ParentAdminComponent
          @movePage="moveMemberAdminPage"
          @onClickMoveInfoModifyPage="moveInfoModifyPage"
          :searchCondition="searchCondition"
          :pNum="pNum"
          :pSize="pSize"
        />
      </v-window-item>

    </v-window>


  </DefaultLayout>
</template>

<script setup>
import ParentAdminComponent from "@/components/ParentAdminComponent.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const tab = ref()

const router = useRouter()
const route = useRoute()

// 페이징 처리 위한 설정값
const pNum = ref(route.query.page || 1)
const pSize = ref(route.query.size || 10)

const searchCondition = ref({ keyword: '', condition: '' })

const moveMemberAdminPage = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "MemberAdminPage",
    query: {
      ...searchCondition.value,
      page: pNum.value,
      size: pSize.value
    }
  })
}

const moveInfoModifyPage = (id) => {

  router.push({ name: 'InfoModifyPage' , params: {id: id} })

}



</script>

<style scoped>

</style>
