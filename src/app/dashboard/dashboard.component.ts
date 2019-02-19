import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  taskList: any = [];
  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(data => {
      console.log(data);
      this.taskList = data;
    });
  }
}
