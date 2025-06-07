export type BlockType = 'button' | 'text' | 'image' | 'link' | 'container';

export interface Block {
    id: string;
    type: BlockType;
    content?: string;
    style?: any;
    props?: {
        href?: string;
        src?: string;
        [key: string]: any;
        alt?: string; // For images
    };
    styles?: {
        display?: string; // e.g. 'flex', 'grid'
        flexDirection?: string; // e.g. 'row', 'column'
        justifyContent?: string;
        alignItems?: string;
        color?: string;
        fontSize?: string;
        backgroundColor?: string;
        padding?: string;
        [key: string]: any;
    };
    children?: Block[]; // For layout block nesting
}
