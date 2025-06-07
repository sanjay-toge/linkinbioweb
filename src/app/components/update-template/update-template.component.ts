import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Block } from '../../model/block.model';
import { ToolboxComponent } from '../shared/toolbox/toolbox.component';
import { PropertiesPanelComponent } from '../shared/properties-panel/properties-panel.component';
import { CanvasComponent } from '../shared/canvas/canvas.component';

@Component({
  selector: 'app-update-template',
  templateUrl: './update-template.component.html',
  styleUrls: ['./update-template.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    // MatLabel,
    MatFormFieldModule,
    DragDropModule,
    FormsModule,
    ToolboxComponent,
    PropertiesPanelComponent,
    CanvasComponent
  ]
})
export class UpdateTemplateComponent {
  blocks: Block[] = [];
  selectedBlock: Block | null = null;

  // Called when a block is selected in the canvas
  onBlockSelected(block: Block) {
    this.selectedBlock = block;
  }

  // Called when the properties panel emits an update
  onUpdateBlock(updatedBlock: Block) {
    const index = this.blocks.findIndex(b => b.id === updatedBlock.id);
    if (index !== -1) {
      this.blocks[index] = { ...updatedBlock };
    }

    // Also update the selected block to reflect new values in real-time
    if (this.selectedBlock && this.selectedBlock.id === updatedBlock.id) {
      this.selectedBlock = { ...updatedBlock };
    }
  }
}
