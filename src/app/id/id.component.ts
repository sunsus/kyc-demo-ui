import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent {

  constructor(private http: HttpClient) { }

  backendUrl = environment.backendUrl;
  idUrl = ''
  selectedModel = "prebuilt-idDocument";
  isLoading = false;
  structuredData: string = '';
  documentImage: string = '';

  sendIdData() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/idDocument`, { documentUrl: this.idUrl })
      .subscribe(
        data => {
          this.structuredData = JSON.stringify(data, null, 2);
          // @ts-ignore
          this.documentImage = this.idUrl;
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }

  reset() {
    this.idUrl = ''
    this.structuredData = ''
    this.documentImage = ''
  }
}
