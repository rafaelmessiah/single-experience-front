import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'produto-lista-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../produto-lista.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoListaSidebarComponent implements OnInit {
  // Public
  public sliderPriceValue = [1, 6];

  constructor() {}

  ngOnInit(): void {}
}
