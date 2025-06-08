import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateRendererComponent } from '../template-renderer/template-renderer.component';
import { TemplateSelectorComponent } from '../template-selector/template-selector.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-editor',
  imports: [TemplateRendererComponent, TemplateSelectorComponent, MatButtonModule],
  templateUrl: './page-editor.component.html',
  styleUrl: './page-editor.component.scss'
})
export class PageEditorComponent {
  pageId: string | null = null;
  selectedTemplateId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.pageId = this.route.snapshot.paramMap.get('id');
  }

  onTemplateSelected(templateId: string) {
    this.selectedTemplateId = templateId;
  }
  savePage() {
    if (this.pageId) {
      console.log('Saving existing page with ID:', this.pageId);
    } else {
      console.log('Creating a new page');
    }
    console.log('Template ID:', this.selectedTemplateId);
    // TODO: Connect to backend API to persist the page
  }
}
