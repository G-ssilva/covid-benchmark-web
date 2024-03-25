import { api } from "./api.js";

export default function Editar() {
  return {
    async editar(idBenchmark, observacao) {
      await api.put(`${api.defaults.baseURL}/editar/${idBenchmark}`,
      {observacao: observacao});
    }
  }
}