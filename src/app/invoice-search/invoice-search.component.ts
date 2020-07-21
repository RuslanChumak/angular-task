import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.scss']
})
export class InvoiceSearchComponent implements OnInit {

  @Output() Search = new EventEmitter<String>()
  handleSearch(){
    this.Search.emit(this.search)
  }
  search:String = ''
  constructor() { }

  ngOnInit(): void {
  }

}
