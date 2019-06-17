package com.springboot.rest.IssueRecord;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
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
public class IssueRecordResource {

	@Autowired
	private IssueRecordRepository issuerecordRepository;
	
	@GetMapping("issuerecords")
	public List<IssueRecord> retrieveAllIssueRecords() {
		return issuerecordRepository.findAll();
	}

	@GetMapping("issuerecords/{id}")
	public IssueRecord retrieveIssueRecord(@PathVariable long id) {
		Optional<IssueRecord> issuerecord = issuerecordRepository.findById(id);

		if (!issuerecord.isPresent())
			throw new IssueRecordNotFoundException("id-" + id);

		return issuerecord.get();
	}
 
	@DeleteMapping("issuerecords/{id}")
	public void deleteIssueRecord(@PathVariable long id) {
		issuerecordRepository.deleteById(id);
	}

	@PostMapping("issuerecords")
	public ResponseEntity<Object> createissuerecord(@RequestBody IssueRecord issuerecord) {

		IssueRecord savedIssueRecord = issuerecordRepository.save(issuerecord);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedIssueRecord.getIssueId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("issuerecords/{id}")
	public ResponseEntity<Object> updateissuerecord(@RequestBody IssueRecord issuerecord, @PathVariable long id) {

		Optional<IssueRecord> issuerecordOptional = issuerecordRepository.findById(id);

		if (!issuerecordOptional.isPresent())
			return ResponseEntity.notFound().build();

		issuerecord.setIssueId(id);
		
		issuerecordRepository.save(issuerecord);

		return ResponseEntity.noContent().build();
	}
}
