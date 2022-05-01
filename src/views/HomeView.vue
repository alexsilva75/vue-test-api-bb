<script setup lang="ts"></script>

<template>
  <main class="container-fluid">
    <div class="row justify-content-around">
      <div class="col-md-6">
        <TheForm></TheForm>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheForm from "../components/TheForm.vue";

export default defineComponent({
  components: { TheForm },
});
</script>
