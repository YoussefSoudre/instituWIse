import { Component,OnDestroy,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { interval ,Subscription} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 // prix1:number=100;
  //prix2:number=150;
  //prix3:number=130;
  message:string="";
  liste;
  seconde;
 

constructor(private dataService:DataService){}
ngOnInit(){
 
  const compteur = interval(1000).pipe(
    map((value) =>
      value % 2 === 0
        ? `${value} est paire`
        : `${value} est impaire`
    )
  );

compteur.subscribe({
     next:(v)=>this.seconde = v,
   error:(e)=>console.error(e),
   complete:()=>console.info("compteur terminé")

  })
  
}

  onAffiche(arg: string){
    return this.message="Merci d avoir voter pour l article: "+ arg;
  }



}
    
