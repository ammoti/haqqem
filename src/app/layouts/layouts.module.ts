import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppNavComponent } from "./nav/nav.component";
import { AppHeaderComponent } from "./header/header.component";
import { AppFooterComponent } from "./footer/footer.component";
import { AppLayoutComponent } from "./layout/layout.component";
@NgModule({
  declarations: [
    AppLayoutComponent,
    AppNavComponent,
    AppHeaderComponent,
    AppFooterComponent,
  ],
  imports: [RouterModule],
})
export class AppLayoutsModule {}
