// drop-list-registry.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DropListRegistryService {
  private ids = new Set<string>();

  register(id: string) {
    this.ids.add(id);
  }

  unregister(id: string) {
    this.ids.delete(id);
  }

  getAllIds(): string[] {
    return Array.from(this.ids);
  }

  clear() {
    this.ids.clear();
  }
}
