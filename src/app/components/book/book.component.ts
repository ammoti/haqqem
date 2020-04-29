import { Component, OnInit, Input } from "@angular/core";
import { BookModel } from "src/app/models/books/book.model";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
})
export class AppBookComponent implements OnInit {
  @Input() book!: BookModel;
  constructor() {}

  ngOnInit(): void {}
}
