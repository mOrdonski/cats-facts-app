import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
