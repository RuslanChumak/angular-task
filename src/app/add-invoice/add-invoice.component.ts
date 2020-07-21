import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  @Output() addInvoice = new EventEmitter<String>()
  add(){
    this.addInvoice.emit(this.invoice)
    this.invoice = ''
  }
  invoice: String = ''
  constructor() { }

  ngOnInit(): void {
  }

}
