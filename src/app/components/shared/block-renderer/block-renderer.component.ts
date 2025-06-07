import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../model/block.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-renderer',
  imports: [CommonModule, DragDropModule, CdkDropList],
  templateUrl: './block-renderer.component.html',
  styleUrls: ['./block-renderer.component.css'],
})
export class BlockRendererComponent {
  @Input() block: Block = null!;
  @Input() parentDropListIds: string[] = [];
  @Output() blockUpdated = new EventEmitter<Block>();

  onDrop(event: CdkDragDrop<Block[]>) {
    const item = event.item.data;
    const previousContainer = event.previousContainer.data;
    const currentContainer = this.block.children ?? [];

    const isSameContainer = event.previousContainer === event.container;

    if (isSameContainer) {
      moveItemInArray(currentContainer, event.previousIndex, event.currentIndex);
    } else {
      const isNewItem = !item.id || item.id.length < 5;

      const newBlock: Block = isNewItem
        ? {
          ...item,
          id: uuidv4(),
          children: item.type === 'container' ? [] : [],
          props: item.props || {},
          styles: item.styles || {},
        }
        : item;

      if (!isNewItem) {
        previousContainer.splice(event.previousIndex, 1);
      }

      currentContainer.splice(event.currentIndex, 0, newBlock);

      // Ensure block.children reference is updated
      this.block.children = currentContainer;
    }

    this.blockUpdated.emit(this.block);
  }


  onBlockUpdated(updated: Block) {
    this.blockUpdated.emit(updated);
  }
  update(event: MouseEvent) {
    event.stopPropagation(); // 👈 Important!
    this.blockUpdated.emit(this.block);
  }

  trackByBlock(index: number, block: Block): string {
    return block.id;
  }
}
