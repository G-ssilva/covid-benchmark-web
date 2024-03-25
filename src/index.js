import Alpine from 'alpinejs';
import Comparar from '../src/services/comparar';
import Estados from '../src/services/estados';

window.comparar = Comparar;
window.estados = Estados;

Alpine.start();