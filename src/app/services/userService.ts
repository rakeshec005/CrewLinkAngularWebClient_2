import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class userService {
    constructor(private _http:Http){}
    getUsers(){
        return this._http.get("http://localhost:4000/api/v1/admin/users").
        map( res=>res.json());
    }
    createUser(usermodel){
        var url = "http://localhost:4000/api/v1/admin/users"
        console.log(usermodel);

    }

}

