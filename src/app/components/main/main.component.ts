import { Component, OnInit } from '@angular/core';
import { IonTitle, IonButton, IonContent, IonModal, IonInput, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonInput, IonModal, IonContent, IonTitle, IonButton, FormsModule, CommonModule],
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

  addItem(){
    const newItem = {
      name: this.item.name,
      amount: this.item.amount
    }

    this.stock.push(newItem);

    localStorage.setItem("stock", JSON.stringify(this.stock));

    this.closeModal();

    console.log(this.stock)
  }

  constructor() { }

  ngOnInit() {
    const stockReload = localStorage.getItem("stock");

    if(stockReload){
      this.stock = JSON.parse(stockReload);
    }
  }

}
