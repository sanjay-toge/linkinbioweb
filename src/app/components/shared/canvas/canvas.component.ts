import { Component, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { v4 as uuidv4 } from 'uuid';
import { Block } from '../../../model/block.model';
import { CommonModule } from '@angular/common';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  imports: [CommonModule, CdkDropList, DragDropModule, BlockRendererComponent],
})
export class CanvasComponent implements AfterViewInit {
  @Input() blocks: Block[] = [];
  @Output() blockSelected = new EventEmitter<Block>();

  dropListIds: string[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    // Avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.updateDropListIds();
    });
  }

  updateDropListIds() {
    this.dropListIds = this.collectDropListIds(this.blocks);
  }

  collectDropListIds(blocks: Block[]): string[] {
    let ids: string[] = [];
    for (const block of blocks) {
      ids.push(`dropList-${block.id}`);
      if (block.type === 'container' && block.children?.length) {
        ids = ids.concat(this.collectDropListIds(block.children));
      }
    }
    return ids;
  }

  onDrop(event: CdkDragDrop<Block[]>) {
    const item = event.item.data;

    if (item.id === '') {
      const container = event.container.data;

      const newBlock: Block = {
        ...item,
        id: uuidv4(),
        children: item.type === 'container' ? [] : undefined,
        props: item.props || {},
        styles: item.styles || {},
      };

      container.splice(event.currentIndex, 0, newBlock);
      this.updateDropListIds();
    }
  }

  onBlockUpdate(updatedBlock: Block) {
    this.updateDropListIds();
    this.blockSelected.emit(updatedBlock);
  }

  trackByBlock(index: number, block: Block): string {
    return block.id;
  }
}
