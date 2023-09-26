import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const data = localStorage.getItem('data')
    
    if (data) {
      const token = JSON.parse(data)
      console.log(token.data)
      if(!token.data){
        this.router.navigateByUrl("/login");
      }
    }
  }
}
