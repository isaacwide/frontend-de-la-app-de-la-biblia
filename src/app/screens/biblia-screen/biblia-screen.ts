import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { BibliaServicie } from '../../servicies/biblia-servicie';

@Component({
  selector: 'app-biblia-screen',
  imports: [MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    FormsModule
  ],
  templateUrl: './biblia-screen.html',
  styleUrl: './biblia-screen.scss',
})
export class BibliaScreen implements OnInit {

  constructor(
    private bibliaServicies:BibliaServicie,
  ){}

  ngOnInit(): void {
  }

  // dice respuesta pero va a ser la peticion que le voy hacer al backend
  public respuesta:any = {}
  public estructura: any[] = [];       // capitulos y versiculos del libro seleccionado
  public capitulos: any[] = [];        // capitulos del libro seleccionado
  public versiculos: any[] = [];  
  public biblia:any = [
  { index: 0, name: 'Génesis' },
  { index: 1, name: 'Éxodo' },
  { index: 2, name: 'Levítico' },
  { index: 3, name: 'Números' },
  { index: 4, name: 'Deuteronomio' },
  { index: 5, name: 'Josué' },
  { index: 6, name: 'Jueces' },
  { index: 7, name: 'Rut' },
  { index: 8, name: '1 Samuel' },
  { index: 9, name: '2 Samuel' },
  { index: 10, name: '1 Reyes' },
  { index: 11, name: '2 Reyes' },
  { index: 12, name: '1 Crónicas' },
  { index: 13, name: '2 Crónicas' },
  { index: 14, name: 'Esdras' },
  { index: 15, name: 'Nehemías' },
  { index: 16, name: 'Ester' },
  { index: 17, name: 'Job' },
  { index: 18, name: 'Salmos' },
  { index: 19, name: 'Proverbios' },
  { index: 20, name: 'Eclesiastés' },
  { index: 21, name: 'Cantares' },
  { index: 22, name: 'Isaías' },
  { index: 23, name: 'Jeremías' },
  { index: 24, name: 'Lamentaciones' },
  { index: 25, name: 'Ezequiel' },
  { index: 26, name: 'Daniel' },
  { index: 27, name: 'Oseas' },
  { index: 28, name: 'Joel' },
  { index: 29, name: 'Amós' },
  { index: 30, name: 'Abdías' },
  { index: 31, name: 'Jonás' },
  { index: 32, name: 'Miqueas' },
  { index: 33, name: 'Nahúm' },
  { index: 34, name: 'Habacuc' },
  { index: 35, name: 'Sofonías' },
  { index: 36, name: 'Hageo' },
  { index: 37, name: 'Zacarías' },
  { index: 38, name: 'Malaquías' },
  { index: 39, name: 'Mateo' },
  { index: 40, name: 'Marcos' },
  { index: 41, name: 'Lucas' },
  { index: 42, name: 'Juan' },
  { index: 43, name: 'Hechos' },
  { index: 44, name: 'Romanos' },
  { index: 45, name: '1 Corintios' },
  { index: 46, name: '2 Corintios' },
  { index: 47, name: 'Gálatas' },
  { index: 48, name: 'Efesios' },
  { index: 49, name: 'Filipenses' },
  { index: 50, name: 'Colosenses' },
  { index: 51, name: '1 Tesalonicenses' },
  { index: 52, name: '2 Tesalonicenses' },
  { index: 53, name: '1 Timoteo' },
  { index: 54, name: '2 Timoteo' },
  { index: 55, name: 'Tito' },
  { index: 56, name: 'Filemón' },
  { index: 57, name: 'Hebreos' },
  { index: 58, name: 'Santiago' },
  { index: 59, name: '1 Pedro' },
  { index: 60, name: '2 Pedro' },
  { index: 61, name: '1 Juan' },
  { index: 62, name: '2 Juan' },
  { index: 63, name: '3 Juan' },
  { index: 64, name: 'Judas' },
  { index: 65, name: 'Apocalipsis' },
  ]

  // Al cambiar el libro
  onLibroChange(): void {
    this.respuesta.capitulo = null;
    this.respuesta.versiculo = null;
    this.capitulos = [];
    this.versiculos = [];

    this.bibliaServicies.obtenerDatos(this.respuesta.libro ).subscribe((data: any) => {
      // Convertir N_capitulos en array para el selector
      this.capitulos = Array.from({ length: data.N_capitulos }, (_, i) => ({
        capitulo: i + 1,
        total_versiculos: data.N_versiculos[i]

        
      }));
    });
  }

  // Al cambiar el capítulo
  onCapituloChange(): void {
    this.respuesta.versiculo = null;
    const cap = this.capitulos.find(c => c.capitulo === this.respuesta.capitulo);
    if (cap) {
      this.versiculos = Array.from({ length: cap.total_versiculos }, (_, i) => i + 1);
    }
  }

public resultado: any = null;

  buscarVersiculo(): void {
    this.bibliaServicies.getVersiculo(
    this.respuesta.libro + 1,
    this.respuesta.capitulo,
    this.respuesta.versiculo
  ).subscribe((data: any) => {
    this.resultado = data;
  });
  }

  // En el componente principal
abrirVentana(): void {
  const url = `/versiculo-detalle?libro=${this.resultado.libro}&capitulo=${this.resultado.capitulo}&versiculo=${this.resultado.versiculo}&texto=${encodeURIComponent(this.resultado.versiculocont)}`;
  
  window.open(url, '_blank', 'width=600,height=400');
}
}
