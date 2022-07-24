import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // Angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    // Angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
