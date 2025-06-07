import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    RouterModule,
    // TopNavComponent,
    // SideNavComponent,
    MatSidenavModule,
    MatGridList,
    MatGridTile,
    CommonModule,
    MatListModule,
    MatIconModule,
    DragDropModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'LinkBioWeb';
  events: string[] = [];
  opened: boolean = true;
  selectedRoute: string = 'Dashboard';
  isDesktop: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        this.isDesktop = result.matches;
        this.opened = this.isDesktop;
      });
  }

  handleNavClick(event: Event) {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[mat-list-item]');

    if (anchor) {
      const route = anchor.getAttribute('routerLink');
      console.log('Navigated to:', route);
      this.selectedRoute = anchor.getElementsByTagName('span')[2].innerHTML
      // You can also trigger other shared logic here
    }
  }

}
