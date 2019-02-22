import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TodoService } from "./services/todo.service";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import {
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from './task-form/task-form.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TodoCardComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
