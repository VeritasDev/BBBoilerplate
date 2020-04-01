import { Component, OnInit } from "@angular/core";
import { RifleService } from "../../services/rifle.service";

@Component({
  selector: "app-blank",
  templateUrl: "./blank.component.html",
  styleUrls: ["./blank.component.scss"]
})
export class BlankComponent implements OnInit {
  asval = {};

  constructor(private rifleService: RifleService) {
    this.rifleService.getRifelData("r7Xekq5JtKXISgTDsuU9").subscribe(rifle => {
      console.debug("RIFLE: ", rifle);
      this.asval = rifle;
    });
  }

  ngOnInit(): void {}
}
