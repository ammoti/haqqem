import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { BookModel } from "src/app/models/books/book.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
})
export class AppListComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private readonly bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.list().subscribe((data: BookModel[]) => {
      this.books = data;
    });
    console.log(this.books);
  }
}
