import { api } from "./api.js";

export default function Excluir() {
  return {
    async excluir(idBenchmark) {
      idBenchmark = Number(idBenchmark);
      await api.delete(`${api.defaults.baseURL}/deletar/${idBenchmark}`);
      location.reload(true);
    }
  }
}