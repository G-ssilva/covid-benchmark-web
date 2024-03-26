import { api } from "./api.js";

import BenchmarkSalvo from "../model/benchmarkSalvo.js";

export default function Listar() {
  return {
    benchmarkSalvoList: [],
    benchmarkSalvoFiltrado: [],

    async listarTodos() {
      try {
        const response = await api.get(`${api.defaults.baseURL}/listar`);
        const data = response.data;

        data.forEach(dado => {
          const benchmarkSalvo = new BenchmarkSalvo(dado);
          this.benchmarkSalvoList.push(benchmarkSalvo);
        });

        this.benchmarkSalvoFiltrado = this.benchmarkSalvoList;
      } catch (e) {
        console.log(e);
      }
    },

    listarFiltrados(nomeBenchmarkSalvo) {
      if(nomeBenchmarkSalvo === '') {
        let nomeBenchmark = document.getElementById("nomeBenchmarkSalvo");
        nomeBenchmark.value = '';
        this.benchmarkSalvoFiltrado = this.benchmarkSalvoList;
      } else {
        this.benchmarkSalvoFiltrado = this.benchmarkSalvoList
        .filter(benchmarkSalvo => benchmarkSalvo.nomeBenchmark.toLowerCase().includes(nomeBenchmarkSalvo.toLowerCase()));
      }
    }
  }
}