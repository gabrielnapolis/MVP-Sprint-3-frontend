import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit{
  create: any;
  id: any;

  constructor() {}

  ngOnInit(): void {
    const token = localStorage.getItem('data')

    if(token){
    
    const user = JSON.parse(token)
    this.id = user.id
    }
  }
}
