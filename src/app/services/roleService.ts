import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class roleService {
    constructor(private _http:Http){}
    getRoles(){
        return this._http.get("http://localhost:4000/api/v1/roles").
        map( res=>res.json());
    }

}

