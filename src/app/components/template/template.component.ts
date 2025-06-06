import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [MatButtonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  router: any;
  constructor(private _router: Router) {
    this.router = _router;
    // Initialization logic can go here if needed 
  }
}
