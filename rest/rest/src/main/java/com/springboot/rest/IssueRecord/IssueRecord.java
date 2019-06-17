package com.springboot.rest.IssueRecord;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import java.text.*; 
import java.util.*;
 
@Entity
public class IssueRecord {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "issue_generator")
	@SequenceGenerator(name="issue_generator", sequenceName = "issue_seq", allocationSize=50)
	private Long IssueId;
	
	private String BookN;
	private String bookname;
	private String publication;
	private String author;
	private String edition;
	private String Status;
	private String issueDate;

	
	public IssueRecord() {
		super();
	}

	public IssueRecord(Long IssueId, String BookN, String bookname,  String author, String edition, String publication, String Status, String issueDate) {
		super();
		this.IssueId = IssueId;
		this.BookN = BookN;
		this.bookname = bookname;
		this.publication = publication;
		this.author = author;
		this.edition = edition;
		this.Status = Status;
		this.issueDate = issueDate;
	}
	public Long getIssueId() {
		return IssueId;
	}
	public void setIssueId(Long IssueId) {
		this.IssueId = IssueId;
	}
	
	public String getBookN() {
		return BookN;
	}
	public void setBookN(String BookN) {
		this.BookN = BookN;
	}
	public String getbookname() {
		return bookname;
	}
	public void setbookname(String bookname) {
		this.bookname = bookname;
	}
	public String getpublication() {
		return publication;
	}
	public void setpublication(String publication) {
		this.publication = publication;
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
	public String getStatus() {
		return Status;
	}
	public void setStatus(String Status) {
		this.Status = Status;
	}
	public String getissueDate() {
		return issueDate;
	}
	public void setissueDate(String issueDate) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss.SS");
		String curr=sdf.format(new Date());
		this.issueDate = curr;
	}
}
