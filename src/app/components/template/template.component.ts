import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [MatButtonModule, MatCard, MatCardTitle, MatCardSubtitle, CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  constructor(public router: Router) { }

  templates = [
    { id: 1, name: 'Personal Portfolio', updated: '2025-06-06' },
    { id: 2, name: 'E-Commerce Bio', updated: '2025-05-28' },
    { id: 3, name: 'Minimal Link Page', updated: '2025-04-15' },
    { id: 4, name: 'Minimal Link Page', updated: '2025-04-15' },
    { id: 5, name: 'Minimal Link Page', updated: '2025-04-15' },
  ];

  createNewTemplate() {
    this.router.navigate(['/update-template']);
  }

  openTemplate(templateId: number) {
    this.router.navigate(['/update-template', templateId]);
  }
  // Initialization logic can go here if needed 
}
