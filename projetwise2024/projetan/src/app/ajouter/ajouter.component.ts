import { Component ,OnInit} from '@angular/core';
import { NgForm,FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  tiitleToAdd= new FormControl('');
  priceToAdd= new FormControl('');
  constructor() { }
ngOnInit(): void {
  
}
onSubmit(form: NgForm)
{
  const newTitle=this.tiitleToAdd;
  const newPrice=this.tiitleToAdd;
  console.log("newTitle: " + newTitle)
  console.log("newPrice: " + newPrice)

}

}
