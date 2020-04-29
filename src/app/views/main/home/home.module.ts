import { AppHomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppListComponent } from "src/app/components/list/list.component";
import { AppBookComponent } from "src/app/components/book/book.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: AppHomeComponent }];

@NgModule({
  declarations: [AppHomeComponent, AppListComponent, AppBookComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class AppHomeModule {}
