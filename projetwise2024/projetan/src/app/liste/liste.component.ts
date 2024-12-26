
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  message:string="";
  liste;

constructor(private dataService:DataService){}
ngOnInit(){
  this.liste=this.dataService.listeArticles;
}

  onAffiche(arg: string){
    return this.message="Merci d avoir voter pour l article: "+ arg;
  }


}
