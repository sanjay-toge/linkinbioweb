import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  imports: [MatSidenavModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

}
