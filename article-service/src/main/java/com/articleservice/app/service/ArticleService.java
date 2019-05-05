package com.articleservice.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.articleservice.app.model.Article;
import com.articleservice.app.table.ArticleTable;

@Service
public class ArticleService {

	public List<Article> getAllArticles(){
		return ArticleTable.getAllArticles();
	}
	
	public Integer createArticle(Article article) {
		List<Article> articles=ArticleTable.getAllArticles();
		Integer maxId= articles.size() > 0 ? articles.get(articles.size()-1).getArticleId():999;
		article.setArticleId(maxId+1);
		ArticleTable.createArticle(article);
		return 1;
	}
	
	public Integer deleteArticle(Integer articleId) {
		
		List<Article> newList=new ArrayList<>(ArticleTable.getAllArticles());
		
		newList.stream().forEach(s ->{
			if(s.getArticleId().equals(articleId)) {
				ArticleTable.getAllArticles().remove(s);
			}
		});
		return 1;
	}
	
	public Integer updateArticle(Article article) {
		List<Article> newList=new ArrayList<>(ArticleTable.getAllArticles());
		newList.stream().forEach(s ->{
			if(s.getArticleId().equals(article.getArticleId())) {
				ArticleTable.getAllArticles().remove(s);
				ArticleTable.getAllArticles().add(article);
			}
		});
		return 1;
	}
	
}
