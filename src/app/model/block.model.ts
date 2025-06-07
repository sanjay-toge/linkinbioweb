export type BlockType = 'button' | 'text' | 'image' | 'link';

export interface Block {
    id: string;
    type: BlockType;
    content?: string;
    style?: any;
    props?: any;
}
