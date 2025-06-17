import { Component, OnInit } from '@angular/core';
import { IonTitle, IonButton, IonContent, IonModal, IonInput } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  imports: [IonInput, IonModal, IonContent, IonTitle, IonButton, FormsModule],
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  implements OnInit {

  item = {
    name: "",
    amount: 0
  }
  
  stock:{name: string, amount: number}[] = [];

  modal = false;

  openModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }

  constructor() { }

  ngOnInit() {}

}
