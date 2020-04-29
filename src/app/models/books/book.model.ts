// import { PriceModel } from "./price.model";

// export class BookModel {
//   constructor(
//     public id?: number,
//     public title?: string,
//     public author?: string,
//     public bookItems?: PriceModel[]
//   ) {}
// }
export interface BookItem {
    id: number;
    title: string;
    author: string;
    publisher: string;
    bookUrl: string;
    vendor: string;
    price: number;
    isbn: string;
    description: string;
    category: string;
    imageUrl: string;
    language: string;
    pageCount?: number;
    pressYear: string;
    created: Date;
    updated?: Date;
    bookId?: any;
    bookTitle?: any;
    translator: string;
    paperType: string;
    dimension: string;
    binding: string;
    edition: string;
    hash: string;
    modified: Date;
}

export interface BookModel {
    id: number;
    title: string;
    author: string;
    created: Date;
    similarity?: any;
    slug: string;
    bookItems: BookItem[];
}

export interface EDITORCONFIG {
    text: string;
    mode: string;
}

export interface ResponsePayload {
    EDITOR_CONFIG: EDITORCONFIG;
}
