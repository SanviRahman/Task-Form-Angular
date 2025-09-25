import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost/Form-Task/index.php";

  constructor(private http: HttpClient) { }


  //select operation
  getRecords() {
    const apiUrl = "http://localhost/Form-Task/index.php";
    return this.http.get(apiUrl);
  }

  sendFormData(formData: FormData) {
    const apiUrl = "http://localhost/Form-Task/index.php";
    return this.http.post(apiUrl, formData);
  }

}
