import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from '../author/author.component';
import { SalutationPipe } from '../salutation.pipe';

@NgModule({
  declarations: [AuthorComponent,SalutationPipe],
  imports: [
    CommonModule
  ],
  exports: [ AuthorComponent,SalutationPipe]
})
export class AuthormoduleModule { }
