import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from "@angular/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CommonService<T> {
  BASE_URL = "/api";

  options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  raiseServerError(error): any {
    var message = error || "Server error";
    alert(`${message}: 
          NODE server it might be stopped.
          If it is stopped run the command 
          "node server" in a commandline.
    `);
    console.error(message);
    return Observable.throw(message);
  }

  handleError(error): Observable<any> {
    console.error(error);
    return Observable.throw(error || "Server error");
  }

  parseResponse(res) {
    return res;
  }
    
  extractData(res: T[]) {
    return res || {};
  }  
}
