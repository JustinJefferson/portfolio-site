import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioDirectoryComponent } from './portfolio-directory/portfolio-directory.component'


const routes: Routes = [
  { path: '', component: PortfolioDirectoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
