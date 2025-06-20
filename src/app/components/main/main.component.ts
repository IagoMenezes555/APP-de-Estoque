import { Component, OnInit } from '@angular/core';
import { IonTitle, IonButton, IonContent, IonModal, IonInput, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  imports: [IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonInput, IonModal, IonContent, IonTitle, IonButton, FormsModule, CommonModule],
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
    this.item.name = "";
    this.item.amount = 0;
  }

  addItem(){
    const newItem = {
      name: this.item.name,
      amount: this.item.amount
    }

    if(newItem.amount > 9999){
      alert("Proibido colocar um número maior que 9999");
      return;
    }

    if(newItem.name == ""){
      alert("Você ainda não deu um nome pro item");
      return;
    }else{
      this.stock.push(newItem);
      localStorage.setItem("stock", JSON.stringify(this.stock));
      this.closeModal();
    }
  }

  removerItem(index: number) {
  this.stock.splice(index, 1);
  localStorage.setItem("stock", JSON.stringify(this.stock));
}


  constructor() { }

  ngOnInit() {
    const stockReload = localStorage.getItem("stock");

    if(stockReload){
      this.stock = JSON.parse(stockReload);
    }
  }

}
