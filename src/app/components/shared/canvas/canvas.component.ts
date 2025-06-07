import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../model/block.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  imports: [CommonModule, CdkDropList, DragDropModule],
})
export class CanvasComponent {
  @Input() blocks: Block[] = [];
  @Output() blockSelected = new EventEmitter<Block>();

  onDrop(event: CdkDragDrop<Block[]>) {
    const draggedItem: Block = event.item.data;

    const newBlock: Block = {
      ...draggedItem,
      id: uuidv4(), // assign a unique ID (or use timestamp or increment)
    };

    this.blocks.push(newBlock);
  }

  selectBlock(block: Block) {
    this.blockSelected.emit(block);
  }
}
