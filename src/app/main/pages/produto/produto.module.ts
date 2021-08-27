import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule } from '@core/components';
import { ProdutoListaSidebarComponent } from './produto-lista/sidebar/sidebar.component';
import { ProdutoItemComponent } from './produto-lista/produto-item/produto-item.component';


const routes: Routes=[
  {
    path: 'produto',
    component: ProdutoComponent,
    data: {animation: 'produto'}
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    CoreSidebarModule
  ],
  declarations: [ProdutoComponent, ProdutoListaComponent, ProdutoListaSidebarComponent, ProdutoItemComponent]
})
export class ProdutoModule { }
