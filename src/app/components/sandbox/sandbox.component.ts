import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector:'app-sandbox',
    template: `
        <h1>Hello Janatbek</h1>
        <div>
            <input type="text" (keyup)="fireEvent($event)" placeholder="keyup event">
        </div>
        <div>
            <input type="text" (keydown)="fireEvent($event)" placeholder="keydown event">
        </div>
        <div>
            <input type="text" (focus)="fireEvent($event)" placeholder="Focus event">
        </div>
        <div>
            <input type="text" (blur)="fireEvent($event)" placeholder="Blur event">
        </div>
        <div>
            <input type="text" (cut)="fireEvent($event)" placeholder="Cut event">
        </div>
        <div>
            <input type="text" (copy)="fireEvent($event)" placeholder="Copy event">
        </div>
        <div>
            <input type="text" (paste)="fireEvent($event)" placeholder="Paste event">
        </div>
        <p (copy)="fireEvent($event)">text to be copied</p>
        <hr>
        <div>
            <input type="text" (keyup)="changeText($event)" placeholder="Change Text">
        </div>
        <p>{{ text }}</p>
    `
})

export class SandboxComponent{
    title:string = 'Keyboard & Input Events';
    text:string = 'Text to Be Changed';

    public constructor(private titleService: Title) {
        this.setTitle();
     }

    public setTitle() {
        this.titleService.setTitle(this.title);
    }

    fireEvent(e){
        console.log(e.type);
    }
    changeText(e){
        this.text = e.target.value;
    }
}