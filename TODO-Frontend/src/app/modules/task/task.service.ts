import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get(environment.API_URL + 'tasks/').pipe(
      map((response: any) => response.body)
    );
  }
}
