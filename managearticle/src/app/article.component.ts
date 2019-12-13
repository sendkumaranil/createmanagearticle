import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from './article.service';
import { Article } from './article';

@Component({
   selector: 'app-article',
   templateUrl: './article.component.html',
   styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit { 
   //Component properties
   allArticles: Article[];
   statusCode: number;
   requestProcessing = false;
   articleIdToUpdate = null;
   processValidation = false;
   mybooks:any[];
   
   //Create form
   articleForm = new FormGroup({
       title: new FormControl('', Validators.required),
       category: new FormControl('', Validators.required)	   
   });
   //Create constructor to get service instance
   constructor(private articleService: ArticleService) {
     
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
      this.getAllArticles();
      this.mybooks=[
         {
            name:"Java",
            author:"John Miley"
         },
         {
            name:"C++",
            author:"Kanetkar"
         },
         {
            name:"Hibernate",
            author:"Smith Miley"
         },
         {
            name:"Database",
            author:"John Miley"
         }
      ];
   }   
   //Fetch all articles
   getAllArticles() {
        this.articleService.getAllArticles()
		    .subscribe(
                  data => this.allArticles = data,
                  errorCode =>  this.statusCode = errorCode
                );   
   }
   //Handle create and update article
   onArticleFormSubmit() {
	    this.processValidation = true;   
      if (this.articleForm.invalid) {
          return; //Validation failed, exit from method.
      }   
	  //Form is valid, now perform create or update
      this.preProcessConfigurations();
	    let article = this.articleForm.value;
	    if (this.articleIdToUpdate === null) {
	      	//Create article
          this.articleService.createArticle(article)
          .subscribe(successCode => {
            this.statusCode = 201;
            this.getAllArticles();	
            this.backToCreateArticle();
          },
          errorCode => this.statusCode = errorCode
          );
	  } else {  
   	   //Handle update article
        article.articleId = this.articleIdToUpdate; 		
	      this.articleService.updateArticle(article)
	      .subscribe(successCode => {
		            this.statusCode = 200;
				        this.getAllArticles();	
					      this.backToCreateArticle();
			    },
          errorCode => this.statusCode = errorCode);  
	  }
   }
   //update article
   updateArticle(article: Article) {
      this.preProcessConfigurations();
      this.articleIdToUpdate = article.articleId;
      this.articleForm.setValue({ title: article.title, category: article.category });
      this.processValidation = true;
      this.requestProcessing = false;
   }
   //Delete article
   deleteArticle(articleId: number) {
      this.preProcessConfigurations();
      this.articleService.deleteArticle(articleId)
	      .subscribe(successCode => {
                this.statusCode = 204;
				    this.getAllArticles();	
				    this.backToCreateArticle();
			    },
		        errorCode => this.statusCode = errorCode);    
   }
   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }
   //Go back from update to create
   backToCreateArticle() {
      this.articleIdToUpdate = null;
      this.articleForm.reset();	  
	  this.processValidation = false;
   }
}
    