import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsFactsComponent } from './cats-facts.component';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CatsFactsComponent,
  },
];

@NgModule({
  declarations: [CatsFactsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule,
  ],
})
export class CatsFactsModule {}
