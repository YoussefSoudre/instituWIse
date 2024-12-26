import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit  {
//  titreArticle: string="Titre de l' article";
  //prixArticle: number=12;
  //  textAltImg: string="Titre alternative de l'image";
    totalNBrLikes: number=0 ;
    comment: string="Ceci est un commentaire"
    @Output() info=new EventEmitter<string>();


    @Input() titreArticle: string;
    @Input() prixArticle: number;
    @Input() description: string;
    @Input() urlImag: string;
    @Input() dispo: boolean;
    @Input() textAltImg: string;
    @Input() idArticle: number;
    jaime: boolean=true;

    ngOnInit():void {
    }
  
    onLike() {
      if(this.jaime==true){
        this.totalNBrLikes++;
        this.info.emit(this.titreArticle);
       this.jaime=false;
      }else{
        
      this.totalNBrLikes--;
this.jaime=true;
      }

      this.info.emit(this.titreArticle);
      
    }

    onUnlike(){
      this.totalNBrLikes--;
      if(this.totalNBrLikes<0) this.totalNBrLikes=0;
    }
    getcolor(){
      if(this.dispo==true){
        return "green";
      }else{
        return "red";
      }
    }

}
