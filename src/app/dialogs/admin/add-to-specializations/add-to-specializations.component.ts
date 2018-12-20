import { Component, OnInit } from "@angular/core";
import { SpecializationService } from "src/app/services/specialization/specialization.service";

@Component({
  selector: "app-add-to-specializations",
  templateUrl: "./add-to-specializations.component.html",
  styleUrls: ["./add-to-specializations.component.scss"]
})
export class AddToSpecializationsComponent implements OnInit {
  name: string = "";

  constructor(private service: SpecializationService) {}

  ngOnInit() {}

  create() {
    this.service.add(this.name);
  }
}
