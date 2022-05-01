export default {
  tokenRequestParams: {
    basic: "Basic YourBasicProvidedByBB",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      grant_type: "client_credentials",
      scope: "cobrancas.boletos-info cobrancas.boletos-requisicao",
    },
  },
};
