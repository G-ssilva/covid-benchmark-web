import DadosComparados from "../model/dadosComparados.js";

export default class BenchmarkSalvo {

  constructor(benchmarkSalvoDto) {
    this.nomeBenchmark = benchmarkSalvoDto.nomeBenchmark || '';
    this.observacao = benchmarkSalvoDto.observacao || '';
    this.id = benchmarkSalvoDto.id || 0;
    this.primeiroEstado = benchmarkSalvoDto.primeiroEstado || '';
    this.segundoEstado = benchmarkSalvoDto.segundoEstado || '';
    this.data = benchmarkSalvoDto.data || '';
    this.dadosComparadosDto = new DadosComparados(benchmarkSalvoDto.dadosComparadosDto) || null;
  }

}