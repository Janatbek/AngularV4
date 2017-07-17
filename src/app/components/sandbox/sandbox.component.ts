import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector:'app-sandbox',
    template: `
        <h1>Hello Janatbek</h1>
    `
})

export class SandboxComponent{
    title:string = 'Master Branch';
    public constructor(private titleService: Title) {
        this.setTitle();
     }

    public setTitle() {
        this.titleService.setTitle(this.title);
    }
}