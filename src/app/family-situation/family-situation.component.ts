import {Component, Input } from '@angular/core';
import {KycResult } from "./kyc-result";

@Component({
  selector: 'app-family-situation',
  templateUrl: './family-situation.component.html',
  styleUrls: ['./family-situation.component.css']
})
export class FamilySituationComponent {

  @Input() kycResult: KycResult;
  @Input() isLoading: boolean;

}
