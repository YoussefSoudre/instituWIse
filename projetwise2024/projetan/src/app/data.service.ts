import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles =[
    {
      id: 1,
      titreArticle:"panier1",
      prixArticle:100,
      description:"Panier de 1",
      textAltImg:"un panier",
      urlImag:"../assets/images/image4.jpg",
      dispo:true
      
     
    },
    {
      id: 2,
      titreArticle:"panier2",
      prixArticle:150,
      description:"Panier de 2",
      textAltImg:"un panier",
      urlImag:"../assets/images/image3.jpg",
      dispo:false
      
      
    },
    {
      id: 3,
      titreArticle:"panier3",
      prixArticle:130,
      description:"Panier de 3",
      textAltImg:"un panier",
      urlImag:"../assets/images/img1.jpg",
    }
  ]


  constructor() { }
}
