import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-renderer',
  imports: [CommonModule],
  templateUrl: './template-renderer.component.html',
  styleUrl: './template-renderer.component.scss'
})
export class TemplateRendererComponent {
  @Input() templateId: string | null = null;
  @Input() pageId: string | null = null;
}
