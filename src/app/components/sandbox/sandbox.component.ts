import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-sandbox',
    template: `
        <h1>Using pipes</h1>
        <p>In this page I started applying custom document title. the source is : <a [href]="url" target="_blank">Set document title</a>
        </p>
        <p>My birthday is: {{ birthday | date }}</p>
        <p>My birthday is: {{ birthday | date: "MM-dd-yy" }}</p>
        <p>I was born in {{ birthday | date:"yyyy"}}</p>
        <p>I love {{ 'cake' | uppercase }}</p>
        <p>I hate {{ 'CAT' | lowercase }}</p>
        <p>Your total is {{ total | currency:"USD":"1" }}</p>
        <p>Your total is {{ total | currency }}</p>
        <p>Your total is {{ total | currency: "GBP" }}</p>
        <p>Your total is {{ total | currency: "GBP":"1" }}</p>
        <p>Our fee is {{ fee | percent }}</p>
    `
})


export class SandboxComponent {
    birthday: Date = new Date(1986, 7, 2);
    title:string = 'Using Pipes';
    url:string = 'https://angular.io/guide/set-document-title';
    total:number = 500;
    fee:number = .15;
    public constructor(private titleService: Title) {
        this.setTitle();
     }

    public setTitle() {
        this.titleService.setTitle(this.title);
    }
}