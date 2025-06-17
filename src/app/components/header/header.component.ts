import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [IonHeader, IonToolbar, IonTitle],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
