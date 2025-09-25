import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  source: any;
  newUser: any = {};

  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRecords().subscribe((data: any) => {
      this.source = data;
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('gender', this.gender);


    this.apiService.sendFormData(formData).subscribe((data: any) => {
      this.source = data;
      console.log("Response: ", data);
    });
  }
}
