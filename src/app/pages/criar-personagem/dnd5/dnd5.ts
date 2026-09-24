import { Component, computed, signal } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { Footer } from '../../../shared/footer/footer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dnd5',
  standalone: true,
  imports: [Header, Footer, FormsModule],
  templateUrl: './dnd5.html',
  styleUrl: './dnd5.css',
})
export class Dnd5 {

  sistema = signal({
    nome: 'Dungeons & Dragons 5ª Edição',
    categoria: 'Fantasia Medieval & Alta Magia',
    selo: 'Sistema Oficial • D&D 5.1 SRD',
    descricao:
      'O RPG de fantasia mais icônico do mundo. Construa heróis lendários através de raças fantásticas, classes épicas e magia ancestral.',

    autor: 'Gary Gygax & Dave Arneson',
    licenca: 'Wizards of the Coast (SRD)',
    dificuldade: 'Intermediária',

    banner: 'assets/images/dnd-banner.webp'
  });

  // Dados da ficha
nomePersonagem = 'Thorne Valerius';
pronomes = 'ele/dele';

raca = 'Humano';
subraca = 'Humano Variante';

classe = 'Guerreiro';
subclasse = 'Mestre de Batalha';

nivel = 3;

antecedente = 'Soldado';
tendencia = 'Caótico e Bom';

// Listas

racas = [
  'Humano',
  'Elfo',
  'Anão',
  'Halfling',
  'Tiefling',
  'Draconato'
];

raca = '';

subracas = [
  'Humano Variante',
  'Alto Elfo',
  'Elfo da Floresta',
  'Anão da Colina',
  'Anão da Montanha'
];

subracas = '';

classes = [
  'Guerreiro',
  'Mago',
  'Clérigo',
  'Ladino',
  'Paladino',
  'Patrulheiro',
  'Bárbaro',
  'Feiticeiro',
  'Bruxo',
  'Bardo',
  'Monge',
  'Druida'
];

classes = '';

subclasses = [
  'Mestre de Batalha',
  'Campeão',
  'Cavaleiro Arcano'
];

subclasses = '';

antecedentes = [
  'Soldado',
  'Acólito',
  'Criminoso',
  'Nobre',
  'Sábio',
  'Forasteiro',
  'Artista'
];

antecedentes = '';

tendencias = [
  'Leal e Bom',
  'Neutro e Bom',
  'Caótico e Bom',
  'Leal e Neutro',
  'Neutro',
  'Caótico e Neutro',
  'Leal e Mau',
  'Neutro e Mau',
  'Caótico e Mau'
];

tendencias = '';

// Automático
bonusProficiencia = computed(() => {
  if (this.nivel >= 17) return '+6';
  if (this.nivel >= 13) return '+5';
  if (this.nivel >= 9) return '+4';
  if (this.nivel >= 5) return '+3';
  return '+2';
});

}

