<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      rail
    >

      <v-list
        density="compact"
        nav
      >
        <v-list-item>
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          ></v-img>
        </v-avatar>
        </v-list-item>

        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmail.com"
        ></v-list-item>

        <v-list-item
          prepend-icon="fa-solid fa-user"
          title="My Page"
          @click="onClickMoveMyPage"
        ></v-list-item>

        <v-list-item
          prepend-icon="fa-solid fa-envelope"
          title="Mailbox"
        ></v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >

      <div
        style="margin: 12px"
      >
        <v-icon
          icon="fa-solid fa-bars"
          @click.stop = "drawer = !drawer"
        >
        </v-icon>
      </div>
      <div
        style="margin-left: 5px"
      >
        <v-icon
          icon="fa-sharp fa-solid fa-house"
          @click=onClickMoveHome
        >
        </v-icon>
      </div>

      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >

        <v-menu
          v-for="category in categories"
          :key="category.categoryId"
          open-on-hover :close-on-content-click="true"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              rounded="0"
              class="align-self-center me-4"
              height="100%"
              v-bind="props"
            >
              {{ category.categoryName }}
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3">
            <v-list-item
              v-for="item in category.subCategoryLists"
              :key="item.subCategoryId"
              @click="() => onClickSubCategory(item.subCategoryId)"
            >
              {{ item.subCategoryName }}
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          variant="plain"
          rounded="0"
          class="align-self-center me-4"
          height="100%"
          @click="onClickMoveRequestPage"
        >
          요청
        </v-btn>

      </v-tabs>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>

        <v-sheet
          min-height="70vh"
          rounded="lg"
          style="justify-content: center"
        >

          <slot></slot>

        </v-sheet>
        <AddButtonComponent @onClickMoveProgramAddPage="onClickMoveProgramAddPage">
        </AddButtonComponent>

      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>

import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
import AddButtonComponent from "@/components/AddButtonComponent.vue";
import {getHomeCategories} from "@/apis/api";
import consts from "@/consts/const";

/** 분야 카테고리 **/
const categories = ref([])

const drawer = ref()

const router = useRouter()

const fetchCategories = async () => {
  const data = await getHomeCategories();

  categories.value = data
}

onBeforeMount(() => {
  fetchCategories()
})


/** 클릭시 HomePage 이동 **/
const onClickMoveHome = async () => {

  console.log("Move to HomePage...")

  await router.push( { name: 'HomePage'})

}

/** 클릭시 MyPage 이동 **/
const onClickMoveMyPage = async () => {

  console.log("Move to MyPage...")

  await router.push( { name: 'MyPage'})

}

/** 클릭시 RequestListPage 이동 **/
const onClickMoveRequestPage = async () => {

  console.log("Move to Request Page...")

  await router.push( { name: 'RequestListPage'})

}

/** 클릭시 ProgramListPage 이동 **/
const onClickSubCategory = async (subCategoryId) => {
  await router.push({
    name: consts.PROGRAM_LIST_PAGE,
    query: {
      subCategoryId: subCategoryId
    }
  })
}

const onClickMoveProgramAddPage = async () => {
  await router.push({
    name:consts.PROGRAM_ADD_PAGE
  })
}

</script>

<style scoped>

</style>
