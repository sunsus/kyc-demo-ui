import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {KycResult, Relationship} from "./kyc-result";

@Component({
  selector: 'app-family-situation',
  templateUrl: './family-situation.component.html',
  styleUrls: ['./family-situation.component.css']
})
export class FamilySituationComponent {

  backendUrl = environment.backendUrl;
  text: string = ''
  isLoading: boolean = false
  relationshipStatus: string = ''
  dateOfBirth: string = ''
  relationships: Relationship[] = []
  remarks: string = ''

  constructor(private http: HttpClient) { }

  onGenerate() {
    console.log(`Text: ` + this.text)
    this.isLoading = true
    this.http.post(`${this.backendUrl}/familySituation`, { text: this.text })
      .subscribe(
        data => {
          console.log(data)
          const kycResult = data as KycResult
          this.relationshipStatus = kycResult.relationshipStatus
          this.dateOfBirth = kycResult.dateOfBirth ?? 'n/a'
          this.relationships = kycResult.relationships
          this.remarks = kycResult.remarks ?? ''
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }
}
