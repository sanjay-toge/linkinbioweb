import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-selector',
  imports: [CommonModule],
  templateUrl: './template-selector.component.html',
  styleUrl: './template-selector.component.scss'
})
export class TemplateSelectorComponent {
  @Output() templateSelected = new EventEmitter<string>();

  templates = [
    { id: 't1', name: 'Simple Grid', previewUrl: 'assets/templates/t1.png' },
    { id: 't2', name: 'Modern Card', previewUrl: 'assets/templates/t2.png' }
  ];

  selectTemplate(id: string) {
    this.templateSelected.emit(id);
  }
}
