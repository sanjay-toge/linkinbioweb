import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatLabel,
    MatFormFieldModule,
    DragDropModule,
    FormsModule
  ]
})
export class UpdateTemplateComponent {
  toolboxItems = [
    { type: 'button', label: 'Button', text: 'Click Me' },
    { type: 'input', label: 'Input', text: 'Enter text' },
    { type: 'link', label: 'Link', text: 'Go to Link' },
    { type: 'image', label: 'Image', text: 'Image' },
  ];
  
  droppedElements: any[] = [];
  selectedElement: number | null = null;

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // Reordering inside canvas
      moveItemInArray(this.droppedElements, event.previousIndex, event.currentIndex);
    } else {
      // From toolbox to canvas
      const newElement = JSON.parse(JSON.stringify(event.item.data));
      newElement.styles = {
        color: '#000000',
        fontSize: 16,
        width: 'auto'
      };
      this.droppedElements.splice(event.currentIndex, 0, newElement);
    }
  }

  editElement(index: number) {
    this.selectedElement = index;
  }
}
