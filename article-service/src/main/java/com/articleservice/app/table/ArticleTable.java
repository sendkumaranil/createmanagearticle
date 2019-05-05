package com.articleservice.app.table;

import java.util.ArrayList;
import java.util.List;

import com.articleservice.app.model.Article;

public class ArticleTable {

	private static List<Article> articleTable=new ArrayList<>();
	
	static {
		Article article=new Article();
		article.setArticleId(1000);
		article.setTitle("Jungle Diary");
		article.setCategory("Animals");
		
		articleTable.add(article);
	}
	
	public static List<Article> getAllArticles(){
		return articleTable;
	}
	
	public static Integer createArticle(Article article) {
		articleTable.add(article);
		return 1;
	}
}
