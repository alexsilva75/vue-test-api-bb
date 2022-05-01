<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useTokenStore } from "./stores/token";
import options from "./globalOptions";

const store = useTokenStore();

async function getAPIToken() {
  try {
    const response = await fetch("https://oauth.hm.bb.com.br/oauth/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "cobrancas.boletos-info cobrancas.boletos-requisicao",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: options.tokenRequestParams.headers.Authorization,
        Accept: ["application/json", "text/plain", "*/*"],
      },
    });

    const dataResponse = await response.json();

    const accessToken = dataResponse.access_token;

    store.setToken(accessToken);
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("token_type", dataResponse.token_type);
    localStorage.setItem("expires_in", dataResponse.expires_in);
  } catch (error) {
    console.log("Error getting token: ", error);
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="getAPIToken" class="btn btn-primary"
                >Obter Token</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
