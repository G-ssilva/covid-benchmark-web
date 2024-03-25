import Alpine from 'alpinejs';
import Comparar from '../src/services/comparar';
import Estados from '../src/services/estados';
import Salvar from '../src/services/salvar';
import Listar from '../src/services/listar';
import Excluir from './services/excluir';
import Editar from '../src/services/editar';

window.comparar = Comparar;
window.salvar = Salvar;
window.estados = Estados;
window.listar = Listar;
window.excluir = Excluir;
window.editar = Editar;

Alpine.start();