import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsFactsComponent } from './cats-facts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CatsFactsComponent,
  },
];

@NgModule({
  declarations: [CatsFactsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class CatsFactsModule {}
