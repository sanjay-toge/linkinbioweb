import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    DragDropModule,
    RouterOutlet,
    // TopNavComponent,
    // SideNavComponent,
    MatSidenavModule,
    MatGridList,
    MatGridTile,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LinkBioWeb';
  events: string[] = [];
  opened: boolean = true;
}
