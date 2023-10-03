import {Component, EventEmitter, Output} from '@angular/core';
import {UntypedFormControl, Validators} from "@angular/forms";
import {IdDocument} from "./id-document";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-legacy-data',
  templateUrl: './legacy-data.component.html',
  styleUrls: ['./legacy-data.component.css']
})
export class LegacyDataComponent {
  text: string = ''
  maxFileSize: number = 1048576
  maxFiles: number = 10
  idDocuments: Array<IdDocument> = []
  ctrl = new UntypedFormControl(null, [Validators.required]);

  @Output('text') outputText = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer) {}

  onTextChange() {
    this.outputText.emit(this.text);
  }

  onFileChange(event :any) {
    if (event.target.files.length > 0) {
      console.log(event.target.files);
      Array.from(event.target.files as FileList).forEach(async file => {
        try {
          const fileContents = await this.readUploadedFileAsBlob(file) as string
          console.log(fileContents);

          let idDocument: IdDocument = {
            // image: this.sanitizer.bypassSecurityTrustUrl(base64Image),
            // image: file.type.startsWith('image/') ? this.sanitizer.bypassSecurityTrustUrl(fileContents) : '',
            image: file.type.startsWith('image/') ? fileContents : '',
            fileName: file.name,
            fileType: file.type,
            data: {}};
          this.idDocuments.push(idDocument)
        } catch (e : any) {
          console.warn(e.message)
        }



      });
    }
  }

  // submit() {
  //   const formData = new FormData();
  //   formData.append('file', this.ctrl.get('fileSource').value);
  //   this.http.post('http://localhost:8001/upload.php', formData)
  //     .subscribe(res => {
  //       console.log(res);
  //       alert('Uploaded Successfully.');
  //     })
  // }
  readUploadedFileAsBlob = (inputFile : File) : Promise<string|null|ArrayBuffer>  => {
    return new Promise((resolve, reject) => {
      const temporaryFileReader = new FileReader();
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  };
}
