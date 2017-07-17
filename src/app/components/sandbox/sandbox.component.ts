import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector:'app-sandbox',
    template: `
        <h1>Hello Janatbek</h1>
        <button (click) = "fireEvent($event)">Click Event</button>
        <br>
        <button (mouseover) = "fireEvent($event)">Mouseover Event</button>
        <button (mousedown) = "fireEvent($event)">Mousedown Event</button>
        <button (dblclick) = "fireEvent($event)">Double Click Event</button>
        <button (drag) = "fireEvent($event)">Drag Event</button>
        <button (dragover) = "fireEvent($event)">Drag Over Event</button>
    `
})

export class SandboxComponent{
    title:string = 'Master Branch';
    fireEvent(e){
        // console.log('Button Clicked');
        // console.log(greeting);
        // console.log(e);//MouseEvent object        
        //console.log(e.target);//<button>Click Event</button>
        //console.log(e.target.id);//the id name if it has an ID
        console.log(e.type); //the name of the event
    }
    public constructor(private titleService: Title) {
        this.setTitle();
     }

    public setTitle() {
        this.titleService.setTitle(this.title);
    }
}