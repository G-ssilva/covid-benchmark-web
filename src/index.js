import Alpine from 'alpinejs';
import Comparar from '../src/services/comparar';
import Estados from '../src/services/estados';
import Salvar from '../src/services/salvar';
import Listar from '../src/services/listar';
import Excluir from './services/excluir';

window.comparar = Comparar;
window.salvar = Salvar;
window.estados = Estados;
window.listar = Listar;
window.excluir = Excluir;

Alpine.start();