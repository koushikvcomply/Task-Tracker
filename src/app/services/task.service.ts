import { Injectable } from '@angular/core';
import { Task } from '../Task.template';
import { Observable} from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  
  constructor(private http:HttpClient) { }
  
  getData(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
    
  }
  deleteOneTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
