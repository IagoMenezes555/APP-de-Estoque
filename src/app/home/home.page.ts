import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, MainComponent, FooterComponent],
})
export class HomePage {
  constructor() {}
}
