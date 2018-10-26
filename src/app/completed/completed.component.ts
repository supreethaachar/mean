import { Component, OnInit } from '@angular/core';
import { Task } from "../tasks/shared/task.model";
import { TaskService } from "../tasks/shared/task.service";

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  public tasks: Task[];
  
  public constructor(private taskService: TaskService){
  }

  ngOnInit() {
    this.taskService.getImportant()
    .subscribe(
      tasks => this.tasks = tasks,
      error => alert("Server Error! Try again later")
    );
  }

}
