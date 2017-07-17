import { Component } from '@angular/core';

@Component({
    selector:'app-sandbox',
    template: `
        <h1>Hello Janatbek</h1>
        <div [style.font-size] = "isSpecial ? 'x-large' : 'smaller' ">Font size depends on isSpecial</div>

        <div [ngStyle] = "currentStyles">This div initialy saveable and special</div>
    `
})

export class SandboxComponent{
    isSpecial = true;
    canSave = true;
    currentStyles = {};

    constructor(){
        this.setCurrentStyles()
    }

    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size' : this.isSpecial ? '24px' : '12px' 
        }
    }
}