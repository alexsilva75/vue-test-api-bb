import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    token: "",
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token;

      console.log("New token: ", this.token);
    },
  },
});
