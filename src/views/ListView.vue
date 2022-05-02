<template>
  <Suspense>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Número do Boleto</th>
          <th>Emissão</th>
          <th>Vencimento</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="bill.numeroBoletoBB" v-for="bill in (bills as any)">
          <td>{{ bill.numeroBoletoBB }}</td>
          <td>{{ bill.dataRegistro }}</td>
          <td>{{ bill.dataVencimento }}</td>
        </tr>
      </tbody>
    </table>
  </Suspense>
</template>
<script lang="ts" setup>
//
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useBillsStore } from "../stores/bills";

// export default defineComponent({
//   async setup() {
const store = useBillsStore();

onMounted(async () => {
  await store.setBills();
});

const { bills } = storeToRefs(store);

//console.log("Bills: ", bills);
</script>
