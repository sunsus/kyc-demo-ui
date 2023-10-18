import {SafeUrl} from "@angular/platform-browser";

export interface IdDocument {
  image: SafeUrl | string
  fileName: string
  fileType: string
  data: any
}
