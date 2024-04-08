import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, NgIf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'saammanFrontend';
  isMenuOpened: boolean = false;
  name: string = "Shakil Ahmad";
  email: string = "shakeel@yopmail.com";

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    console.log("Toggling Menu: ", this.isMenuOpened)
  }
}
