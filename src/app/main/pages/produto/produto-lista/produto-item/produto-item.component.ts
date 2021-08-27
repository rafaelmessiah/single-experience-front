import { Component, OnInit } from '@angular/core';
import { ProdutoSimplesModel } from '../../models/produto-simples.model';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss']
})
export class ProdutoItemComponent implements OnInit {

  public produtos: ProdutoSimplesModel[]

  constructor() { }

  ngOnInit() {
    
  }

}
