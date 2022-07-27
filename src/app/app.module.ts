import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './components/shared/shared.module';
import { FileUploadServiceService } from './services/file-upload-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    // Angular material
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    // Angular material
    MatSidenavModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
