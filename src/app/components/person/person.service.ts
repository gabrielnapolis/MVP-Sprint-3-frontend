import { Person, PersonsDto } from './person.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  baseUrl = "http://127.0.0.1:5000/pessoa";
  baseUrlLogin = "http://127.0.0.1:5000/login";
  baseUrl2 = "http://127.0.0.1:5000/pessoas";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"],
    });
  }

  create(person: Person): Observable<Person>{
    return this.http.post<Person>(this.baseUrl, person)
  }

  read(): Observable<PersonsDto>{
    const token = localStorage.getItem('data')
    if(!token){
      const error: any = new Error('')
      error.timestamp = Date.now();
      return error; 
    }
    const headers = { 'Authorization': `Bearer ${token}` }
    return this.http.get<PersonsDto>(this.baseUrl2, { headers })
  }

  readById(id: string): Observable<Person>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Person>(url)
  }

  update(person: Person): Observable<Person> {
    const url =  `${this.baseUrl}/${person.id}`
    return this.http.put<Person>(url, person)
  }

  delete(person: Person): Observable<Person> {
    const url = `${this.baseUrl}/${person.id}`
    return this.http.delete<Person>(url)
  }

  login(email: string, senha: string): Observable<string> {
    return this.http.post<string>(this.baseUrlLogin, {email, senha})
  }
}
