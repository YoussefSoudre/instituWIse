import { Component,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent implements OnInit {
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

   public contacts: any;
    background='#f5f6fa';
     constructor(private contactService: ContactsService){
  
  
    }
    ngOnInit(){
    //  this.http.get(this.url).subscribe(data => {
      //  this.contacts = data;
     // }, err=>console.log(err));
    }
    getContacts(){
      this.contactService.getContacts().subscribe(data => {
        this.contacts = data;
      }, err=>console.log(err))
  }
  addContact(value:any){
    let contact= value;
    this.contactService.Addcontact(contact).subscribe(data => {
      this.getContacts ();
      return true;
    }, 
    error=>{
      console.log("Error Saving contact information");
  //  return Observable.throw("Error Saving contact information");
      
    }
    )
  
  }
  
}
