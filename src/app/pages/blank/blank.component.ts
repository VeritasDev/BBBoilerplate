import { Component, OnInit } from "@angular/core";
import { RifleService } from "../../services/rifle.service";

@Component({
  selector: "app-blank",
  templateUrl: "./blank.component.html",
  styleUrls: ["./blank.component.scss"]
})
export class BlankComponent implements OnInit {
  constructor(private rifleService: RifleService) {
    this.rifleService.getAllAmmo().subscribe(rifle => {
      console.debug("RIFLE: ", rifle);
    });
  }

  ngOnInit(): void {}
}
