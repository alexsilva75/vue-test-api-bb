import { defineStore } from "pinia";
import options from "../globalOptions";
import { useTokenStore } from "./token";

export const useBillsStore = defineStore({
  id: "bills",
  state: () => ({
    bills: [],
  }),
  getters: {
    getBills: (state) => state.bills,
  },
  actions: {
    async setBills() {
      const tokenStore = useTokenStore();
      console.log("Token Store Token: ", tokenStore.token);
      const response = await fetch(
        `http://localhost:8080/${options.sandboxURL}/boletos?gw-dev-app-key=${options.developer_application_key}&indicadorSituacao=A&agenciaBeneficiario=452&contaBeneficiario=123873&`,
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${tokenStore.token}`,
          },
        }
      );

      const responseData = await response.json();

      this.bills = responseData.boletos;
      console.log("Bills List: ", responseData);
    },
  },
});
