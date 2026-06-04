import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vericulo-screen',
  imports: [],
  templateUrl: './vericulo-screen.html',
  styleUrl: './vericulo-screen.scss',
})
export class VericuloScreen implements OnInit{
public libro: string = '';
  public capitulo: string = '';
  public versiculo: string = '';
  public texto: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.libro    = params['libro'];
      this.capitulo = params['capitulo'];
      this.versiculo = params['versiculo'];
      this.texto    = decodeURIComponent(params['texto']);
    });
  }

}
