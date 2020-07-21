import { Component, OnInit } from '@angular/core';
import {filter, scan} from 'rxjs/operators'
import {from} from 'rxjs'

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {


  invoices: String[] = ['Invoice 1', 'Invoice 2', 'Invoice 3']
  filteredInvoices: String[] = this.invoices
  q: string = ''
  
  ngOnInit(): void {
  }

  addInvoice(name){
    this.invoices.push(name)
    this.search(this.q)
  }
  search(q){
    this.q = q
    const stream = from(this.invoices)
    .pipe(
      filter(n => n.indexOf(q) !== -1),
      scan((acc, v) => acc.concat(v), [])
    );
    stream.subscribe(x => this.filteredInvoices = x)
  }
  delete(i){
    let id = this.invoices.indexOf(this.filteredInvoices[i])
    this.invoices.splice(id, 1)
    this.filteredInvoices.splice(i, 1)
    this.search(this.q)
  }

}
