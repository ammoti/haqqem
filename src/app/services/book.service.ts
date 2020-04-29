import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BookModel } from "src/app/models/books/book.model";
@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<BookModel[]>(
      "/api"
    )
  }
}
