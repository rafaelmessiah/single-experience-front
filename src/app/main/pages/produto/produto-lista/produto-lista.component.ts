import { Component, OnInit } from '@angular/core';
import { ProdutoSimplesModel } from '../models/produto-simples.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss']
})
export class ProdutoListaComponent implements OnInit {

  public produtos: ProdutoSimplesModel[]
  public produto: ProdutoSimplesModel
  constructor() { }

  ngOnInit() {

    this.produtos = [
      {
        id:1,
        nome:'PC GAMER T-GAMER  FRAMEMASTER',
        preco: 6300.00,
        imagem: '../assets/images/eCommerce/1.png'
      },
      {
        id: 2,
        nome:'PC GAMER T-GAMER KINGSTON FURY',
        preco: 7500.00,
        imagem:'../../../../../assets/images/eCommerce/1.png'
      },
      {
        id:3,
        nome:'PC GAMER T-POWER WARLORD',
        preco: 8300.00,
        imagem:'assets/images/eCommerce/1.png'
      }
    ]
  }

}
