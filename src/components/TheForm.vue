<template>
  <div>
    <h2>Geração de boletos (Sandbox)</h2>
    <form class="py-4" @submit.prevent="submitForm">
      <fieldset>
        <legend>Dados do Boleto</legend>
        <div class="py-3">
          <label for="" class="form-label">Número do Convênio</label>
          <input
            type="text"
            v-model="formInputValues.numeroConvenio"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Número da Carteira</label>
          <input
            type="text"
            v-model="formInputValues.numeroCarteira"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label"
            >Número da Variação da Carteira</label
          >
          <input
            type="text"
            v-model="formInputValues.numeroVariacaoCarteira"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Código da Modalidade</label>
          <input
            type="text"
            v-model="formInputValues.codigoModalidade"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Data de Emissao</label>
          <input
            type="date"
            @change="calculateDueDate"
            v-model="formInputValues.dataEmissao"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Data de Vencimento</label>
          <input
            type="date"
            disabled
            v-model="formInputValues.dataVencimento"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Valor Original</label>
          <CurrencyInput
            v-model="formInputValues.valorOriginal"
            class="form-control"
            :options="{ currency: 'BRL', autoDecimalDigits: true }"
          ></CurrencyInput>
        </div>
        <div class="py-3">
          <label for="" class="form-label">Valor Abatimento</label>
          <CurrencyInput
            v-model="formInputValues.valorAbatimento"
            class="form-control"
            :options="{ currency: 'BRL', autoDecimalDigits: true }"
          ></CurrencyInput>
        </div>
        <div class="py-3">
          <label for="" class="form-label"
            >Quantidade de Dias para Protesto</label
          >
          <input
            v-model="formInputValues.quantidadeDiasProtesto"
            class="form-control"
            :options="{ currency: 'BRL', autoDecimalDigits: true }"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Dados do Pagador</legend>
        <div class="py-3">
          <label for="sacado" class="form-label"></label>
          <input type="text" id="sacado" class="form-control" />
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import CurrencyInput from "./CurrencyInput.vue";
export default defineComponent({
  components: {
    CurrencyInput,
  },
  data() {
    return {
      accessToken: "",
      formInputValues: {
        numeroConvenio: 3128557,
        numeroCarteira: 17,
        numeroVariacaoCarteira: 35,
        codigoModalidade: 4,
        dataEmissao: "", //"dd.mm.aaaa",
        dataVencimento: "",
        valorOriginal: 130,
        valorAbatimento: 13,
        quantidadeDiasProtesto: 45,
        quantidadeDiasNegativacao: 60,
        orgaoNegativador: 10,
        indicadorAceiteTituloVencido: "N",
        numeroDiasLimiteRecebimento: 0,
        codigoAceite: "A",
        codigoTipoTitulo: 2,
        descricaoTipoTitulo: "DM",
        indicadorPermissaoRecebimentoParcial: "N",
        numeroTituloBeneficiario: "123456",
        campoUtilizacaoBeneficiario: "UM TEXTO COM MAIS INFO",
        numeroTituloCliente: "00031285570000030000",
        mensagemBloquetoOcorrencia: "Outro texto",
        desconto: {
          tipo: 1,
          dataExpiracao: "",
          // porcentagem: 0,
          valor: 5,
        },
        // segundoDesconto: {
        //   dataExpiracao: "string",
        //   porcentagem: 0,
        //   valor: 0,
        // },
        // terceiroDesconto: {
        //   dataExpiracao: "string",
        //   porcentagem: 0,
        //   valor: 0,
        // },
        jurosMora: {
          tipo: 2,
          porcentagem: 1,
          //valor: 0,
        },
        // multa: {
        //   tipo: 0,
        //   data: "string",
        //   porcentagem: 0,
        //   valor: 0,
        // },
        pagador: {
          tipoInscricao: 1,
          numeroInscricao: 97965940132,
          nome: "Odorico Paraguassu",
          endereco: "Avenida Dias Gomes 1970",
          cep: 77458000,
          cidade: "Sucupira",
          bairro: "Centro",
          uf: "TO",
          telefone: "63987654321",
        },
        beneficiarioFinal: {
          tipoInscricao: 1,
          numeroInscricao: 66779051870,
          nome: "Dirceu Borboleta",
        },
        indicadorPix: "N",
      },
    };
  },
  mounted() {
    this.formInputValues.dataEmissao = moment(new Date().toISOString()).format(
      "YYYY-MM-DD"
    );
    this.calculateDueDate();
  },
  methods: {
    printMoney(moneyValue: string) {
      console.log(
        "Returned value: ",
        moneyValue,
        "Original value: ",
        this.formInputValues.valorOriginal
      );
    },
    calculateDueDate() {
      const issueTime = new Date(this.formInputValues.dataEmissao).getTime();
      const dueDate = new Date(issueTime + 5 * 24 * 60 * 60 * 1000);

      this.formInputValues.dataVencimento = moment(
        dueDate.toISOString()
      ).format("YYYY-MM-DD");
      //   moment(dueDate.toDateString());
    },
    async submitForm() {
      //console.log("Sending data...", this.formInputValues.valorOriginal);
      const response = await fetch("");
    },
  },
});
</script>
