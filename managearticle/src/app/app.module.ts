import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { AuthormoduleModule } from './authormodule/authormodule.module';
import { AuthorComponent } from './author/author.component';
import { SalutationPipe } from './salutation.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthormoduleModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent],
  exports:[AuthormoduleModule]
})
export class AppModule { }
