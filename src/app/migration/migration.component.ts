import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import {KycResult, Relationship} from "../family-situation/kyc-result";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.css']
})
export class MigrationComponent {

  backendUrl = environment.backendUrl;
  text: string;
  kycResult: KycResult;
  isLoading: boolean = false;
  relationships: Relationship[] = []
  state: string = 'source'

  constructor(private http: HttpClient) { }

  onStateChange() {
    this.state = 'review'
    this.onProcess()
  }



  onProcess() {
    console.log(`Text: ` + this.text)
    this.isLoading = true
    this.http.post(`${this.backendUrl}/familySituation`, { text: this.text })
      .subscribe(
        data => {
          console.log(data)
          const kycResult = data as KycResult
          this.relationships = kycResult.relationships!
          this.isLoading = false
          this.kycResult = kycResult
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }

  onTextChange($event: string) {
    this.text = $event
  }

  onClickSource() {
    this.isLoading = false;
    this.state = 'source';
  }
}
