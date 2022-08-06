import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/config/endpoints';
import { FileUploadServiceService } from 'src/app/services/file-upload-service.service';
import { HttpClientService } from 'src/app/services/http-client/http-client.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit, OnChanges {

  selectedFiles: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  imagesMaxError: number = 0;

  @Input()
  onChargeImages: boolean = false;

  @Input()
  codeRoom: string = "";

  @Output()
  isSelectedImages = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClientService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.onChargeImages.currentValue) {
      console.log(changes);
      this.uploadFiles();
    }
  }

  ngOnInit(): void {
    // this.imageInfos = this.uploadService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0] && this.selectedFiles.length <= 4) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
    this.isSelectedImages.emit(this.selectedFiles.length <= 4);
    this.imagesMaxError = this.selectedFiles.length;
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles && this.selectedFiles.length <= 4) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
    this.imagesMaxError = this.selectedFiles.length;
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('code', this.codeRoom);
      this.httpClient.post(ENDPOINTS.uploadImages, formData).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Se cargó la imagen: ' + file.name;
            this.message.push(msg);
            // this.imageInfos = this.uploadService.getFiles();
          }
          console.log(event)
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Error al cargar imagen: ' + file.name;
          this.message.push(msg);
        });
    }
  }

}
