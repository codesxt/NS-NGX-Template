import { Component, OnInit } from "@angular/core";
import { BasicService } from "../shared/services/basic.service";

@Component({
    selector: "ns-home",
    templateUrl: "home/home.component.html",
})

export class HomeComponent implements OnInit {
  basicText : string = "";
  constructor(
    private basicService : BasicService
  ){

  }

  ngOnInit(){
    this.basicText = this.basicService.getSomething().message;
  }
}
