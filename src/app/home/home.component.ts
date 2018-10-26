import { Component, OnInit } from '@angular/core';
import { Task } from "../tasks/shared/task.model";
import { TaskService } from "../tasks/shared/task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tasks: Task[];

   public constructor(private taskService: TaskService){
  }

  public ngOnInit(){
    this.taskService.getImportant()
      .subscribe(
        tasks => this.tasks = tasks,
        error => alert("Server Error! Try again later")
      );
  }
  public deleteTask(task: Task){
    if ( confirm(`Do you want to delete the task? "${task.title}"`) ) {
      this.taskService.delete(task.id)
        .subscribe(
          () => this.tasks = this.tasks.filter(t => t !== task),
          () => alert("Server error")
        )
    }
  }
}
