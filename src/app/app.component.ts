import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backendUrl = environment.backendUrl;
  url: string = '';
  selectedModel = 'prebuilt-idDocument'
  structuredData: any;
  documentImage: string = '';
  isLoading = false;

  constructor(private http: HttpClient) {}

  sendIdData() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/idDocument`, { documentUrl: this.url })
      .subscribe(
        data => {
          this.structuredData = JSON.stringify(data, null, 2);
          // @ts-ignore
          this.documentImage = this.url;
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }

  sendData() {
    this.isLoading = true
    this.http.post(`${this.backendUrl}/parse`, { documentUrl: this.url, model: this.selectedModel })
      .subscribe(
        data => {
          this.structuredData = JSON.stringify(data, null, 2);
          // @ts-ignore
          this.documentImage = this.url;
          this.isLoading = false
        },
        error => {
          console.error(error);
          this.isLoading = false
        }
      );
  }
}
