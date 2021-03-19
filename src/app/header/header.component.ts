import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    console.log('Open contact dialog');

    const contactDialog = this.dialog.open(ContactComponent, {
      height: '400px',
      width: '600px'
    });
  }

}
