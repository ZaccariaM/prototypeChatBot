import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(private http: HttpClient) { }
    private url = 'http://localhost:8080/account';

    //get all accounts
    getAccounts(): Observable<any> {
        //console.log("backend")
        return this.http.get(this.url);
    }

    getAccountById(id: string): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    //add new account
    postAccount(body: {}): Observable<any> {
        return this.http.post(this.url, body);
    }

    //delete account 
    deleteAccount(id: string): Observable<any>{
        console.log(`${this.url}/${id}`);
        return this.http.delete(`${this.url}/${id}`, {responseType: 'text' });
    }
}
