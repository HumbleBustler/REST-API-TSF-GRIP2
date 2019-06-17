package com.springboot.rest.Book;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	private String bookname;
	private String author;
	private String edition;
	private String publication;
	private Long qty;

	
	public Book() {
		super();
	}

	public Book(String bookname, String author, String edition, String publication, Long qty) {
		super();
		this.bookname = bookname;
		this.author = author;
		this.edition = edition;
		this.publication = publication;
		this.qty = qty;
	}
	
	public String getbookname() {
		return bookname;
	}
	public void setbookname(String bookname) {
		this.bookname = bookname;
	}
	public String getedition() {
		return edition;
	}
	public void setedition(String edition) {
		this.edition = edition;
	}
	public String getauthor() {
		return author;
	}
	public void setauthor(String author) {
		this.author = author;
	}
	public String getpublication() {
		return publication;
	}
	public void setpublication(String publication) {
		this.publication = publication;
	}
	public Long getqty() {
		return qty;
	}
	public void setqty(Long qty) {
		this.qty = qty;
	}		
}
