import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class salaryService {
    constructor(private _http:Http){}

    getSalary(){
        return this._http.get("http://localhost:4000/api/v1/salary").
        map( res=>res.json());
    }
}

