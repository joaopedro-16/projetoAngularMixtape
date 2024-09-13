import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksComponent } from '../tracks/tracks.component';
import { TracksInterface } from '../../interface';
import { Service } from '../../service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TracksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  tracksList: TracksInterface[] = [];
  service: Service = inject(Service);
  filteredList: TracksInterface[] = [];

  constructor() {
    this.service.getAllTracks().then((tracksList: TracksInterface[]) => {
      this.tracksList = tracksList;
      this.filteredList = tracksList;
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário (faz a página não atualizar e realizar a busca)
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredList = this.tracksList;
      return;
    }
    this.filteredList = this.tracksList.filter(track => {
      const keywords = text.toLowerCase().split(' ');
      // Verifica se alguma das palavras-chave corresponde a qualquer atributo da faixa
      return keywords.every(keyword =>
        track.name.toLowerCase().includes(keyword) ||
        track.producer.toLowerCase().includes(keyword) ||
        track.bpm.toLowerCase().includes(keyword) ||
        track.genre.toLowerCase().includes(keyword)
      );
    });
  }

  applyFilters() {
    const selectedGenre = document.querySelector('input[name="gen"]:checked')?.getAttribute('value');
    const selectedBpm = document.querySelector('input[name="bpm"]:checked')?.getAttribute('value');

    this.filteredList = this.tracksList.filter(track => {
      let genreMatch = true;
      let bpmMatch = true;

      if (selectedGenre) {
        genreMatch = track.genre.toLowerCase() === selectedGenre.toLowerCase();
      }

      if (selectedBpm) {
        bpmMatch = track.bpm === selectedBpm;
      }

      return genreMatch && bpmMatch;
    });
  }

  clearFilters() {
    const radios = document.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    radios.forEach(radio => (radio.checked = false));

    // Aplica os filtros novamente para mostrar a lista completa
    this.filteredList = this.tracksList;
  }
}