import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Block } from '../../../model/block.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.scss'],
  imports: [CommonModule, FormsModule, DragDropModule],
})
export class PropertiesPanelComponent implements OnChanges {
  @Input() selectedBlock: Block | null = null;
  @Output() updateBlock = new EventEmitter<Block>();

  localBlock: Block | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedBlock']) {
      // Clone the block so changes are not immediately reflected in canvas
      this.localBlock = this.selectedBlock ? { ...this.selectedBlock } : null;
    }
  }

  onChange() {
    if (this.localBlock) {
      this.updateBlock.emit(this.localBlock);
    }
  }
}
