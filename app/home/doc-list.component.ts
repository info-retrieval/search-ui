import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'doc-list',
  styleUrls: ['./app/home/doc-list.component.css'],
  templateUrl: './app/home/doc-list.component.html'
})

export class DocListComponent implements OnInit { 
	public docs;
	public from;
	public hasMore;
	public selected;

	public model = {search: ""};

	constructor(public api:ApiService, private route: ActivatedRoute) {

	}

	ngOnInit() {
		this.getAllDocs();
	}

	getAllDocs() {
		this.from = 0;

		this.api.getAllDocs(this.from)
			.map((res) => res.json())
			.subscribe(
		        data => { this.docs = data ; console.log(this.from)},
		        err => console.error(err),
		        () => console.log('done')
		      );
	}

	onPrev() {
		if(this.from > 10) {
			this.from = parseInt(this.from) - 10;
			this.api.getAllDocs(this.from)
				.map((res:Response) => res.json())
				.subscribe(
			        data => { this.docs = data ; },
			        err => console.error(err),
			        () => console.log('done')
			      );
		}
	}

	onNext() {
		this.from = parseInt(this.from) + 10;
		this.api.getAllDocs(this.from)
			.map((res:Response) => res.json())
			.subscribe(
		        data => { this.docs = data ; },
		        err => console.error(err),
		        () => console.log('done')
		      );
	}

	onSubmit() {
		this.from = 0;
		console.log(this.model.search)
		if(this.model.search.length > 0) {
	    	this.api.getDocsFromSearch(this.model.search)
				.map((res:Response) => res.json())
				.subscribe(
		        	data => { this.docs = data; this.hasMore = this.docs.length > 10;},
		        	err => console.error(err),
		        	() => console.log('done')
		      	);
		} else {
			this.getAllDocs();
		}
	}

	onSelect(docId) {
		this.selected = this.docs.filter(doc => doc.id === docId)[0];
		console.log(this.selected);
	}
}
