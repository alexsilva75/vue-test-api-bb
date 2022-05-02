<template>
  <table class="table table-hover"></table>
</template>
<script lang="ts" setup>
//
import { useBillsStore } from "../stores/bills";

const store = useBillsStore();

store.setBills();
</script>
