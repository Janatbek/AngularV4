import { Component } from '@angular/core';

@Component({
    selector: 'sandbox',
    // templateUrl: './sandbox.component.html',
    template: `
    <h1>Hello World</h1>
    <h4 [class.special]= "isSpecial">This class binding is special</h4>
    <h4 [ngClass] = "currentClasses">This div is initially special and saveable</h4>
    `,
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent {
    isSpecial = true;
    canSave = true;
    currentClasses = {};

    constructor(){
        this.setCurrentClasses();
    }

    setCurrentClasses(){
        this.currentClasses = {
            saveable: this.canSave,
            special:this.isSpecial
        }
    }
}

