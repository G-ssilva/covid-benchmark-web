export default class DadosComparados {

  constructor(dadosComparadosDto) {
    this.primeiroEstado = dadosComparadosDto.primeiroEstado || '';
    this.segundoEstado = dadosComparadosDto.segundoEstado || '';
    this.dataComparacao = dadosComparadosDto.data|| '';
    this.diferencaConfirmacoes = dadosComparadosDto.diferencaConfirmacoes || 0;
    this.diferencaMortes = dadosComparadosDto.diferencaMortes || 0;
    this.diferencaConfirmadosSobreCemMilHabitantes = dadosComparadosDto.diferencaConfirmadosSobreCemMilHabitantes || 0;
    this.diferencaMortesSobreConfirmados = dadosComparadosDto.diferencaMortesSobreConfirmados || 0;
  }

}
