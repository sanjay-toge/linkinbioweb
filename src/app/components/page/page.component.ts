import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  pages = [
    { id: '1', name: 'My Portfolio' },
    { id: '2', name: 'Shop Links' }
  ];

  constructor(private router: Router) { }

  createPage() {
    this.router.navigate(['/page-editor/new']);
  }

  editPage(id: string) {
    this.router.navigate(['/page-editor', id]);
  }
}
