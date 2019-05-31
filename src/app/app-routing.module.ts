import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudiesComponent } from "./studies/studies.component";
import { VideosComponent } from "./videos/videos.component";



const routes: Routes = [
  {path: '',  redirectTo: '/studies',  pathMatch: 'full'},
  {path: 'studies', component: StudiesComponent},
  {path: 'videos', component: VideosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
