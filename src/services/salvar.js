import { api } from "./api.js";

export default function Salvar() {
  return {
    async salvar(nomeBenchmarkSalvo, primeiroEstado, segundoEstado, dataComparacao, observacaoBenchmarkSalvo) {
      try {
        await api.post(`${api.defaults.baseURL}/${primeiroEstado}/${segundoEstado}/${dataComparacao}/salvar`,
        { nomeBenchmark: nomeBenchmarkSalvo.value, observacao: observacaoBenchmarkSalvo.value});

        let nomeBenchmark = document.getElementById("nomeBenchmarkSalvo");
        let observacaoBenchmark = document.getElementById("observacaoBenchmarkSalvo")

        nomeBenchmark.value = ""
        observacaoBenchmark.value = "";

      } catch (e) {	
        console.log(e);
      }
    }
  }
}