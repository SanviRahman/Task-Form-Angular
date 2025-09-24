import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  source:any;

  name: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';

  onSubmit(form: NgForm) {
    this.source = form.value;
    console.log(form.value);
  }
}
