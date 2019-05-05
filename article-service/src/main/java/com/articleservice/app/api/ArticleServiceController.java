package com.articleservice.app.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.articleservice.app.model.Article;
import com.articleservice.app.service.ArticleService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/articles")
public class ArticleServiceController {

	@Autowired
	private ArticleService articleService;
	
	@GetMapping
	public ResponseEntity<List<Article>> getAllArticles(){
		List<Article> articles=articleService.getAllArticles();
		return ResponseEntity.ok(articles);
	}
	
	@PostMapping(value="/article",consumes= {"application/json"})
	public ResponseEntity<Void> createArticle(@RequestBody Article article){
		Integer status=articleService.createArticle(article);
		if(status==1) {
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}else {
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping(value="/article",consumes= {"application/json"})
	public ResponseEntity<Void> updateArticle(@RequestBody Article article){
		Integer status=articleService.updateArticle(article);
		if(status==1) {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}else {
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping
	public ResponseEntity<Void> deleteArticle(@RequestParam("articleid") Integer articleId){
		Integer status=articleService.deleteArticle(articleId);
		if(status==1) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
