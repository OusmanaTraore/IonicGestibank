import { Component, OnInit } from '@angular/core';
import { User} from "../model";
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  user : User;
  nom: string;
  prenom : string;
  phone : string;
  mail : string;
  compte: string;
  password: string;

  constructor( 
    private service : UserService, 
    private router : Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { 
  
  }

  ngOnInit() {
   
  }
   inscription(){
  
     this.user = {
       name: this.nom,
       firstname: this.prenom,
       tel: this.phone,
       email: this.mail,
       role: "CLIENT",
       status: "EN ATTENTE",
       account: this.compteSelected(),
       password: this.Password()
      }
      this.service.postUser(this.user).subscribe(
        response => {
          if(this.nom != null && this.prenom!=null && this.phone!=null && this.mail!=null 
            && this.compteSelected()!=null){
          this.creationAlert();
          this.router.navigate(["home"]);
        }else{
          this.messageToasted("Merci de renseigner tous les champs !");
        }
      }
        )
        

  }

  compteSelected(){
    return this.compte;
  }

  
  async creationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenue chez GestiBank',
      message: `
      Votre compte a été créé avec succès ! <br>
      Vous pouvez déjà vous connecter sur votre espace client. <br>
      Connectez-vous sur votre adresse mail afin de récupérer vos identifiants. <br>
      `,
      buttons: ['OK']
    });
    await alert.present();
  }
  async messageToasted(msg : string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  
  Password() {
    // throw new Error('Function not implemented.');
    // if (typeof l==='undefined'){var l:any=8;}
    let l:number = 8;
    /* c : chaîne de caractères alphanumérique */
    var c='abcdefghijknopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ12345679',
    n=c.length,
    /* p : chaîne de caractères spéciaux */
    p='!@#$+-*&_',
    o=p.length,
    r='',
    n=c.length,
    /* s : determine la position du caractère spécial dans le mdp */
    s=Math.floor(Math.random() * (p.length-1));
    
    for(let i=0; i<l; ++i){
      if(s == i){
        /* on insère à la position donnée un caractère spécial aléatoire */
        r += p.charAt(Math.floor(Math.random() * o));
      }else{
        /* on insère un caractère alphanumérique aléatoire */
        r += c.charAt(Math.floor(Math.random() * n));
      }
    }
    return r;
    
  }
}
  