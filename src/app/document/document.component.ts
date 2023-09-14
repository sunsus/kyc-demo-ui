import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  backendUrl = environment.backendUrl;
  idUrl = ''
  selectedModel = "prebuilt-read";
  isLoading = false;
  structuredData: string = '';
  documentImage: string = '';

  constructor(private http: HttpClient) { }

  sendDocumentData() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/parse`, { documentUrl: this.idUrl, model: this.selectedModel })
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
