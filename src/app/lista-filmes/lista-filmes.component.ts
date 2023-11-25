// lista-filmes.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent {
  @Input() filmes: { titulo: string, descricao: string, imagem: string }[] = [];
}
