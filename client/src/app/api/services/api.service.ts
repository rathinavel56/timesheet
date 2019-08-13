import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    private baseUrl: String = environment.apiEndPoint;
    private httpOptions: any;
    public windowTop: any = window.top;

    constructor(private http: HttpClient) {

        const getTokenString: any = this.getToken();
        let addHeaders: HttpHeaders = new HttpHeaders();
             addHeaders = addHeaders.append('Access-Control-Allow-Origin', '*');
             addHeaders = addHeaders.append('Accept', 'application/json');
        if (getTokenString !== null) {
            addHeaders = addHeaders.append('Authorization', getTokenString);
        }
        this.httpOptions = {
            headers: addHeaders
        }; 
    }

    getToken() {
        if (sessionStorage.getItem('timeSheet') !== undefined) {
            const sessionStr = JSON.parse(sessionStorage.getItem('timeSheet'));
            return (sessionStr && sessionStr.access_token !== null) ? 'Bearer ' + sessionStr.access_token : null;
        } else {
            return null;
        }
    }

    httpGet<T>(url): Observable<T> {
        return this.http
            .get<T>(this.baseUrl + url, this.httpOptions)
            .pipe(
                catchError(this.handleNetworkErrors)
            );
    }

    /**
     * Performs a request with `post` http method.
     */
    httpPost(url, body: any): Observable<any> {
        return this.http
            .post(this.baseUrl + url, body, this.httpOptions)
            .pipe(
                catchError(this.handleNetworkErrors)
            );
    }

    /**
     * Performs a request with `put` http method.
     */
    httpPut(url, body: any): Observable<any> {
        return this.http
            .put(this.baseUrl + url, body, this.httpOptions)
            .pipe(
                catchError(this.handleNetworkErrors)
            );
    }

    /**
     * Performs a request with `delete` http method.
     */
    httpDelete(url, options?: any): Observable<any> {
        return this.http
            .delete(this.baseUrl + url, options)
            .pipe(
                catchError(this.handleNetworkErrors)
            );
    }

    /**
     * Handles all the network errors from the Http methods
     */
    handleNetworkErrors(errObject: HttpErrorResponse): Observable<any> {
        if (errObject.status === 401) {
            sessionStorage.removeItem('timeSheet');
            sessionStorage.setItem('session_expired', 'true');
            window.location.href = "/login";
        }
        else if (errObject.status === 500) {
         alert(errObject.error.statusMessage);
        }
        return of(true);
    }

}
