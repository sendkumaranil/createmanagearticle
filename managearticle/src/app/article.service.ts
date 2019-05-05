import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/index';
import { Article } from './article';

@Injectable()
export class ArticleService {
  articleServiceEndpoint:string="http://localhost:8282/articles";
  constructor(private http:HttpClient) { }
  //Fetch all articles
  getAllArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.articleServiceEndpoint);
  }
  //Create Article
  createArticle(article:Article):Observable<number>{
    return this.http.post<number>(this.articleServiceEndpoint+"/article",article);
  }
  //update Article
  updateArticle(article:Article):Observable<number>{
    return this.http.put<number>(this.articleServiceEndpoint+"/article",article);
  }
  //delete Article
  deleteArticle(articleId:number):Observable<number>{
    return this.http.delete<number>(this.articleServiceEndpoint+"?articleid="+articleId);
  }
}
