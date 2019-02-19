import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getTodos(): Observable<any[]> {
    const url = "http://localhost:8080/api/todo";
    return this.http.get<any[]>(url);
  }
}
