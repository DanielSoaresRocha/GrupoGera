import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(element: FocusEvent){
    let input = element.target as HTMLInputElement;

    if(input.value.length){
      input.classList.add('has-content');
    }else{
      input.classList.remove('has-content');
    }
  }
}
