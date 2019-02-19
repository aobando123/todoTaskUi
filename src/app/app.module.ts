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
  MatGridListModule
} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
