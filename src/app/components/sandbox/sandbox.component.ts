import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-sandbox',
    template: `
        <h1>Hello Janatbek</h1>
        <button (click) = "toggleValue()">Toogle a div</button>
        <div *ngIf = 'value'>
            <h1>Hello World</h1>
        </div>
    `
})

export class SandboxComponent {
    title: string = 'Changing Properties With Events';
    value: boolean = true;
    public constructor(private titleService: Title) {
        this.setTitle();
    }

    toggleValue(){
        this.value = !this.value;
    }

    public setTitle() {
        this.titleService.setTitle(this.title);
    }
}