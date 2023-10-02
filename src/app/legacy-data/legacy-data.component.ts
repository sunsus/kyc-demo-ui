import {Component, EventEmitter, Output} from '@angular/core';
import {UntypedFormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-legacy-data',
  templateUrl: './legacy-data.component.html',
  styleUrls: ['./legacy-data.component.css']
})
export class LegacyDataComponent {
  text: string = ''
  maxFileSize: number = 1048576
  maxFiles: number = 10

  ctrl = new UntypedFormControl(null, [Validators.required]);

  @Output('text') outputText = new EventEmitter<string>();

  onTextChange() {
    this.outputText.emit(this.text);
  }
}
