package com.springboot.rest.Book;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
@CrossOrigin
@RestController
@RequestMapping(path = "/")
public class BookResource {

	@Autowired
	private BookRepository bookRepository;

	@GetMapping("books")
	public List<Book> retrieveAllBooks() {
		return bookRepository.findAll();
	}

	@GetMapping("books/{bookname}")
	public Book retrieveBook(@PathVariable String bookname) {
		Optional<Book> book = bookRepository.findById(bookname);

		if (!book.isPresent())
			throw new BookNotFoundException("bookname-" + bookname);

		return book.get();
	}

	@DeleteMapping("books/{bookname}")
	public void deleteBook(@PathVariable String bookname) {
		bookRepository.deleteById(bookname);
	}

	@PostMapping("books")
	public ResponseEntity<Object> createbook(@RequestBody Book book) {
		Book savedBook = bookRepository.save(book);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{bookname}")
				.buildAndExpand(savedBook.getbookname()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("books/{bookid}")
	public ResponseEntity<Object> updatebook(@RequestBody Book book, @PathVariable String bookname) {

		Optional<Book> bookOptional = bookRepository.findById(bookname);

		if (!bookOptional.isPresent())
			return ResponseEntity.notFound().build();

		book.setbookname(bookname);
		
		bookRepository.save(book);

		return ResponseEntity.noContent().build();
	}
}
