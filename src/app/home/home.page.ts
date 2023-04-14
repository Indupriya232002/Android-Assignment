import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  repositories: any[] = [];

  name:string = "";
  description : string="";
  owner: string ="";
  ownerError: boolean = false;
  nameError: boolean = false; 
  descriptionError: boolean = false;
  imageUrl = 'https://github.com/Indupriya232002/'+this.name;
  items = [
    {  name: 'HTML-CSS-Assignment.git',
     description: 'Html and cascading styles assignment',
     url: 'https://github.com/angular/angular'
    },
    {  name: 'Bootstrap-Assignment-2',
     description: 'bootstrap learning concepts',
     url: 'https://github.com/Indupriya232002/Bootstrap-Assignment-2'
    },
    {  name: 'my-project',
     description: 'this is my own project',
     url: 'https://github.com/Indupriya232002/my-project'
    },
  ];
  constructor(private socialSharing: SocialSharing, private alertController: AlertController,private modalController: ModalController,) {}

  async addRepo(){
    if(this.name != "" && this.description != ""){
      console.log(this.name);
      const newItem = { name: this.name, description: this.description,url : this.imageUrl };
      this.items.push(newItem);
      const alert = await this.alertController.create({
				header: 'Sucess',
				message: 'Sucessfully Added',
				buttons: ['OK'],
			});
			await alert.present();
      this.modalController.dismiss();
      console.log(this.items);
    }
    this.validateOwner();
    this.validateDescription();
    this.validateName();
  }
  shareViaTwitter() {
    this.socialSharing.shareViaTwitter('Test twitter sharing', null, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  openModelShare(item,openModel){
      }
  validateOwner() {
    if (!this.owner) {
      this.ownerError = true;
    } else {
      this.ownerError = false;
    }
  }

  validateName() {
    if (!this.name) {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
  }

  validateDescription() {
    if (!this.description) {
      this.descriptionError = true;
    } else {
      this.descriptionError = false;
    }
  }

  shareViaFacebook() {
    this.socialSharing.shareViaFacebook('Test facebook sharing', null, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaInstagram() {
    this.socialSharing.shareViaInstagram('Test instagram sharing', this.imageUrl)
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaEmail() {
    this.socialSharing.shareViaEmail('Test email sharing', 'sharing', ['technyks@gmail.com'])
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaWhatsapp() {
    this.socialSharing.shareViaWhatsApp('Test whatsapp sharing', this.imageUrl, 'https://youtu.be/C7pQl3VxDzE')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  shareViaWhatsappToPhone() {
    this.socialSharing.shareViaWhatsAppToPhone(
      '+919101085890', 
      'Test whatsapp to phone sharing', 
      null,
      'https://github.com/Indupriya232002/Bootstrap-Assignment-2')
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

}
