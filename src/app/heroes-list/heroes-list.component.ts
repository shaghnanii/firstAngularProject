import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {
  heroes: any[] = [
    {
      id: 1,
      firstName: "Shakeel",
      lastName: "Khan",
      email: "shakeel@yopmail.com",
      address: "Street 32, Block A, G9/1, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        ".net",
        "fullStack",
        "angular"
      ]
    },
    {
      id: 2,
      firstName: "John",
      lastName: "doe",
      email: "johndoe@yopmail.com",
      address: "Street 43, Block C, H-8/4, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        "#frontend",
        "#angularJs"
      ]
    },
    {
      id: 3,
      firstName: "Ahmad",
      lastName: "Khan",
      email: "ahmad@yopmail.com",
      address: "Street# 433, Block B, f-9/1, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        "#angularJs",
      ]
    },
    {
      id: 4,
      firstName: "Ajmal",
      lastName: "Doe",
      email: "ajmal@yopmail.com",
      address: "Street 552, Block D, G-10/1, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        "#angularJs",
        "#vueJs"
      ]
    },
    {
      id: 5,
      firstName: "Newton",
      lastName: "Soft",
      email: "newton@yopmail.com",
      address: "Street 666, Block C, G-11/1, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        "#nuxtJs",
        "#vueJs"
      ]
    },
    {
      id: 6,
      firstName: "Shezaa",
      lastName: "Khan",
      email: "sheeza@yopmail.com",
      address: "Street 454, Block B, G-12/1, Islamabad, Pakistan",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis ullamcorper massa. Suspendisse et nunc et dui pharetra tempor ut a sem.",
      tags: [
        "#nodeJs",
        "#angularJs",
        "#.net",
        "#laravel"
      ]
    }
  ]
}
