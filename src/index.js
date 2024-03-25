import Alpine from 'alpinejs';
import Comparar from '../src/services/comparar';
import Estados from '../src/services/estados';
import Salvar from '../src/services/salvar';
import Listar from '../src/services/listar';

window.comparar = Comparar;
window.salvar = Salvar;
window.estados = Estados;
window.listar = Listar;

Alpine.start();