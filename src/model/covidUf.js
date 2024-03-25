export default class CovidUf {

  constructor(covidUfDto) {
    this.data = covidUfDto.data || '';
    this.uf = covidUfDto.uf || '';
    this.confirmacoes = covidUfDto.confirmacoes || 0;
    this.mortes = covidUfDto.mortes || 0;
    this.confirmadosSobreCemMilHabitantes = covidUfDto.confirmadosSobreCemMilHabitantes || 0;
    this.mortesSobreConfirmados = covidUfDto.mortesSobreConfirmados || 0;
    this.possuiDados = covidUfDto.possuiDados || false;
  }

}
