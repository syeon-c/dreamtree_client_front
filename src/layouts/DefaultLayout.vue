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
import {useRouter} from "vue-router";

const categories = ref([
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',])

const drawer = ref()

const router = useRouter()

const onClickMoveHome = async () => {

  console.log("Move to HomePage...")

  await router.push( { name: 'HomePage'})

}


</script>

<style scoped>

</style>
