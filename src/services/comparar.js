import { api } from "./api.js";

import CovidUf from "../model/covidUf.js";
import DadosComparados from "../model/dadosComparados.js";

export default function Comparar() {
  return {
    primeiroEstado: new CovidUf("Data", "UF", 0, 0, 0, 0, false),
    segundoEstado: new CovidUf("Data", "UF", 0, 0, 0, 0, false),
    dadosComparados: new DadosComparados("UF", "UF", 0, 0, 0, 0),

    async comparar(primeiraUf, segundaUf, dataComparacao) {
      try {
        const response = await api.get(`${api.defaults.baseURL}/${primeiraUf}/${segundaUf}/${dataComparacao}`);

        const data = response.data;

        const covidUfDtoList = data.covidUfDtoList;
        const dadosComparadosDto = data.dadosComparadosDto;
  
        this.primeiroEstado = new CovidUf(covidUfDtoList[0]);
        this.segundoEstado = new CovidUf(covidUfDtoList[1]);
        this.dadosComparados = new DadosComparados(dadosComparadosDto);

      } catch (e) {	
        console.log(e);
      }
    },

    isValid(primeiraUf, segundaUf, dataComparacao){
      if(dataComparacao === '') {
        return false;
      }
      const data = new Date(dataComparacao);

      const dataInicio = new Date('2020-02-25');
      const dataFim = new Date('2022-03-27');

      return primeiraUf !== '' && segundaUf !== '' && data >= dataInicio && data <= dataFim;
    }
  }
}