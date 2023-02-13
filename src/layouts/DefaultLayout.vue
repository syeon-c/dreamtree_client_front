<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model = "drawer"
      location="left"
      temporary
    >

    </v-navigation-drawer>

    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <div>
        <v-icon
          icon="fa-solid fa-bars"
          @click.stop = "drawer = !drawer"
        >
        </v-icon>

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
        <v-tab
          v-for="category in categories"
          :key="category"
        >
          {{ category }}
        </v-tab>
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
          Homepage
          <!--  -->
        </v-sheet>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>

import {ref} from "vue";

const categories = ref([
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',])

const drawer = ref()

const onClickMoveHome = () => {

  console.log("Move to HomePage...")

}


</script>

<style scoped>

</style>
