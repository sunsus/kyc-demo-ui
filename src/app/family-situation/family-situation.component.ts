import {Component, Input, SimpleChange} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {KycResult, Relation} from "./kyc-result";

@Component({
  selector: 'app-family-situation',
  templateUrl: './family-situation.component.html',
  styleUrls: ['./family-situation.component.css']
})
export class FamilySituationComponent {

  constructor() { }

  @Input() kycResult: KycResult;
  @Input() isLoading: boolean;

}
