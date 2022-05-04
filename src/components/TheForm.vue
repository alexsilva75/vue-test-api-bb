<template>
  <div>
    <h2>Geração de boletos (Sandbox)</h2>
    <form class="py-4" @submit.prevent="submitForm">
      <fieldset>
        <legend>Dados do Boleto</legend>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label">Número do Convênio</label>
            <input
              type="text"
              v-model="formInputValues.numeroConvenio"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Número da Carteira</label>
            <input
              type="text"
              v-model="formInputValues.numeroCarteira"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Número da Variação da Carteira</label
            >
            <input
              type="text"
              v-model="formInputValues.numeroVariacaoCarteira"
              class="form-control"
            />
          </div>

          <div class="py-3 col-auto">
            <label for="" class="form-label">Código da Modalidade</label>
            <input
              type="text"
              v-model="formInputValues.codigoModalidade"
              class="form-control"
            />
          </div>
        </div>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label">Data de Emissao</label>
            <input
              type="date"
              @change="calculateDueDate"
              v-model="formInputValues.dataEmissao"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Data de Vencimento</label>
            <input
              type="date"
              disabled
              v-model="formInputValues.dataVencimento"
              class="form-control"
            />
          </div>
        </div>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label">Valor Original</label>
            <CurrencyInput
              v-model="formInputValues.valorOriginal"
              class="form-control"
              :options="{ currency: 'BRL', autoDecimalDigits: true }"
            ></CurrencyInput>
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Valor Abatimento</label>
            <CurrencyInput
              v-model="formInputValues.valorAbatimento"
              class="form-control"
              :options="{ currency: 'BRL', autoDecimalDigits: true }"
            ></CurrencyInput>
          </div>
        </div>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Quantidade de Dias para Protesto</label
            >
            <input
              type="number"
              v-model="formInputValues.quantidadeDiasProtesto"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Quantidade de Dias para Negativação</label
            >
            <input
              type="number"
              v-model="formInputValues.quantidadeDiasNegativacao"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Orgão Negativador</label>
            <select
              v-model="formInputValues.orgaoNegativador"
              name=""
              id=""
              class="form-select"
            >
              <option value="10" selected>10</option>
              <option value="11">11</option>
            </select>
          </div>
        </div>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Indicador de Aceite de Título Vencido</label
            >
            <select
              name=""
              id=""
              v-model="formInputValues.indicadorAceiteTituloVencido"
              class="form-select"
            >
              <option value="S">S</option>
              <option value="N" selected>N</option>
            </select>
          </div>

          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Número de Dias Limite Recebimento</label
            >
            <input
              type="number"
              v-model="formInputValues.numeroDiasLimiteRecebimento"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Código de Aceite</label>
            <input
              type="text"
              v-model="formInputValues.codigoAceite"
              class="form-control"
            />
          </div>
        </div>

        <div class="row align-items-center g-3">
          <div class="py-3 col-auto">
            <label for="" class="form-label">Código Tipo Título</label>
            <input
              type="number"
              disabled
              v-model="formInputValues.codigoTipoTitulo"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label">Descrição do Tipo do Título</label>
            <input
              type="text"
              disabled
              v-model="formInputValues.descricaoTipoTitulo"
              class="form-control"
            />
          </div>
          <div class="py-3 col-auto">
            <label for="" class="form-label"
              >Indicador de Permissão de Recebimento Parcial</label
            >
            <select
              name=""
              id=""
              v-model="formInputValues.indicadorPermissaoRecebimentoParcial"
              class="form-select"
            >
              <option value="S">S</option>
              <option value="N" selected>N</option>
            </select>
          </div>
        </div>

        <div class="py-3">
          <label for="" class="form-label"
            >Número do Título do Beneficiário
          </label>
          <input
            type="text"
            disabled
            v-model="formInputValues.numeroTituloBeneficiario"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label"
            >Campo de Utilização do Beneficiário
          </label>
          <input
            type="text"
            maxlength="30"
            v-model="formInputValues.campoUtilizacaoBeneficiario"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Número do Título do Cliente </label>
          <input
            type="text"
            v-model="formInputValues.numeroTituloCliente"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label for="" class="form-label">Mensagem Bloqueto Ocorrência </label>
          <textarea
            class="form-control"
            v-model="formInputValues.mensagemBloquetoOcorrencia"
            name=""
            id=""
            cols="30"
            rows="3"
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <legend>Dados do Pagador</legend>
        <div class="py-3">
          <label for="nome" class="form-label">Nome</label>
          <input
            type="text"
            v-model="formInputValues.pagador.nome"
            id="nome"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Tipo de Inscrição</label>
          <input
            type="number"
            v-model="formInputValues.pagador.tipoInscricao"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Número de Inscrição (CPF/CNPJ)</label>
          <input
            type="number"
            v-model="formInputValues.pagador.numeroInscricao"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Endereço</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            class="form-control"
            v-model="formInputValues.pagador.endereco"
          ></textarea>
        </div>
        <div class="py-3">
          <label class="form-label">CEP</label>
          <input
            type="number"
            v-model="formInputValues.pagador.cep"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Cidade</label>
          <input
            type="text"
            v-model="formInputValues.pagador.cidade"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Bairro</label>
          <input
            type="text"
            v-model="formInputValues.pagador.bairro"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">UF</label>
          <input
            type="text"
            v-model="formInputValues.pagador.uf"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Telefone</label>
          <input
            type="text"
            v-model="formInputValues.pagador.telefone"
            class="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Dados do Beneficiário</legend>
        <div class="py-3">
          <label class="form-label">Nome</label>
          <input
            type="text"
            v-model="formInputValues.beneficiarioFinal.nome"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Tipo de Inscrição</label>
          <input
            type="number"
            v-model="formInputValues.beneficiarioFinal.tipoInscricao"
            class="form-control"
          />
        </div>
        <div class="py-3">
          <label class="form-label">Número de Inscrição (CPF/CNPJ)</label>
          <input
            type="number"
            v-model="formInputValues.beneficiarioFinal.numeroInscricao"
            class="form-control"
          />
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import { mapState } from "pinia";
import { useTokenStore } from "../stores/token";
import CurrencyInput from "./CurrencyInput.vue";
import options from "../globalOptions";
import axios from "axios";
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
        quantidadeDiasProtesto: 0,
        quantidadeDiasNegativacao: 50,
        orgaoNegativador: 10,
        indicadorAceiteTituloVencido: "N",
        numeroDiasLimiteRecebimento: 0,
        codigoAceite: "A",
        codigoTipoTitulo: 2,
        descricaoTipoTitulo: "DM",
        indicadorPermissaoRecebimentoParcial: "N",
        numeroTituloBeneficiario: "123456",
        campoUtilizacaoBeneficiario: "UM TEXTO COM MAIS INFO",
        numeroTituloCliente: "00031285570000930991",
        mensagemBloquetoOcorrencia: "Outro texto",
        // desconto: {
        //   tipo: 1,
        //   dataExpiracao: "",
        //   // porcentagem: 0,
        //   valor: 5,
        // },
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
  computed: {
    ...mapState(useTokenStore, ["token"]),
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
      // const store = useTokenStore();

      //console.log("Token: ", this.token);
      //console.log("Form Data: ", JSON.stringify(this.formInputValues));
      const response = await fetch(`${options.proxyBaseURL}/boletos`, {
        method: "POST",
        body: JSON.stringify({
          ...this.formInputValues,
          dataEmissao: moment(this.formInputValues.dataEmissao).format(
            "DD.MM.YYYY"
          ),
          dataVencimento: moment(this.formInputValues.dataVencimento).format(
            "DD.MM.YYYY"
          ),
        }),
        headers: {
          //Authorization: `Bearer ${this.token}`,
          Accept: "application/json",
        },
      });

      // const responseData = await axios.post(
      //   //`${options.sandboxURL}/boletos?gw-dev-app-key=${options.developer_application_key}`,
      //   "https://api.hm.bb.com.br/cobrancas/v2/boletos?gw-dev-app-key=d27b577900ffab501362e17d10050a56b9d1a5b2",
      //   this.formInputValues,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${this.token}`,
      //       Accept: "application/json",
      //     },
      //     //withCredentials: true,
      //   }
      // ); //await response.json();

      const responseData = await response.json();
      console.log("Billing response: ", responseData);
    },
  },
});
</script>
