import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { AuthormoduleModule } from './authormodule/authormodule.module';
import { AuthorComponent } from './author/author.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    StudentComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthormoduleModule,
    AppRoutingModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent],
  exports:[AuthormoduleModule]
})
export class AppModule { }
