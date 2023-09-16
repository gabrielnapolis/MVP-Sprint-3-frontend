import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  token: any;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.token = localStorage.getItem("token");

    if (!this.token) {
      this.router.navigateByUrl("/login");
    }
  }
}
