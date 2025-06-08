import { Block } from "./block.model";

// template.model.ts
export interface Template {
    id: string;
    name: string;
    pages: Page[];
}

export interface Page {
    id: string;
    title: string;
    contentBlocks: Block[]; // Your existing block system
    route: string; // e.g., '/about' or '/projects'
}
