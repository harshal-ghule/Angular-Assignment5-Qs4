import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  public UserName;
  public CollageName;
  public Password;

  public sendData()
  {
      console.log(this.UserName);
      console.log(this.CollageName);
      console.log(this.Password);
  }

  ngOnInit() {
  }

}
