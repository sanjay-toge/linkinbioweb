import { Component } from '@angular/core';
import { Block } from '../../../model/block.model';
import { CommonModule } from '@angular/common';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-toolbox',
  imports: [CommonModule, CdkDrag, DragDropModule],
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {

  toolboxItems: Block[] = [
    { id: '', type: 'button', content: 'Click Me' },
    { id: '', type: 'text', content: 'Edit this text' },
    { id: '', type: 'image', content: 'https://via.placeholder.com/150' },
    { id: '', type: 'link', content: 'Click Here', props: { href: 'https://example.com' } },
    { id: '', type: 'container', props: {}, children: [] }

  ];
}
