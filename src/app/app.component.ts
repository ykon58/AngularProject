import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface ITask{
  title: string,
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "To Do List";
  tasks = [
    {
      title: 'молоко',
      complete: false
    },
    {
    title: 'хлеб',
    complete: true
    },
    {
    title: 'картошка',
    complete: false
    }
  ];
  form: FormGroup;

  add(title){
    this.tasks.push({
      title, 
      complete: false
    });
  }
  toggle(task: ITask){
    task.complete = !task.complete;
  };
  remove(ind: number){
   this.tasks.splice(ind, 1);
  };
}
