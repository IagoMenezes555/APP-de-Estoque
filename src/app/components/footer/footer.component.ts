import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [IonFooter, IonToolbar, IonTitle],
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
