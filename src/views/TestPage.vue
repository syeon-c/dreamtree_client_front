<template>
  <DefaultLayout>
    <Form :validation-schema="schema" @submit="onSubmit">
      <v-container>
        <v-row>
          <v-col>
            <Field name="test"  v-slot="{field, errors}">
              <v-text-field v-model="test" v-bind="field" label="Test" :error-messages="errors" />
            </Field>
            {{test}}
          </v-col>
        </v-row>
      </v-container>
      <v-btn type="submit">submit</v-btn>
    </Form>

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {Form, Field} from "vee-validate";
import * as yup from 'yup'
import {ref} from "vue";
const test = ref()
const schema = {
  test: yup.string().required()
}
const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2))
}

</script>

<style scoped>

</style>
