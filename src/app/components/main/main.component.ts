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
    amount: null as number | null
  }
  
  stock:{name: string, amount: number}[] = [];

  modal = false;
  modalItem = false;
  modalDelete = false;

  openModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
    this.item.name = "";
    this.item.amount = null;
  }

  openModalItem(item: any, index: number){
    this.selectedItem = { ...item };
    this.selectedIndex = index;
    this.modalItem = true;
  }

  closeModalItem(){
    this.modalItem = false;
  }
  
  openModalDelete(index: number){
    this.deleteIndex = index;
    this.modalDelete = true;
  }

  closeModalDelete(){
    this.modalDelete = false;
    this.deleteIndex = null;
  }

  addItem(){
    const newItem = {
      name: this.item.name,
      amount: this.item.amount as number
    }

    if(newItem.amount == null){
      alert("Você ainda não informou a quantidade do item");
      return;
    }

    if(newItem.amount > 9999){
      alert("Proibido colocar um número maior que 9999");
      return;
    }

    if(newItem.name == ""){
      alert("Você ainda não informou o nome do item");
      return;
    }else{
      this.stock.push(newItem);
      localStorage.setItem("stock", JSON.stringify(this.stock));
      this.closeModal();
    }
  }

  deleteIndex: number | null = null;

  removeItem() {
    if (this.deleteIndex !== null) {
    this.stock.splice(this.deleteIndex, 1);
    localStorage.setItem("stock", JSON.stringify(this.stock));
    this.closeModalDelete();
  }
}

selectedItem: any = null;
selectedIndex: number | null = null;

editItem(){
    if (this.selectedIndex !== null) {
    this.stock[this.selectedIndex] = { ...this.selectedItem };
    this.closeModalItem();
    }
}

  constructor() { }

  ngOnInit() {
    const stockReload = localStorage.getItem("stock");

    if(stockReload){
      this.stock = JSON.parse(stockReload);
    }
  }

}
