import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class userService {
    private _getUserUrl = "http://localhost:4000/api/v1/admin/users";
    private _createUserUrl = "http://localhost:4000/api/v1/admin/users";
    constructor(private _http:Http){}
    getUsers(){
        
        return this._http.get(this._getUserUrl)
        .map( res=>res.json())
        .catch(this.handleFetchError);
    }
    createUser(usermodel){
        
        console.log(usermodel);

    }

    private handleFetchError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error ||"Server Error : Error in Fetching data" )

    }

}

