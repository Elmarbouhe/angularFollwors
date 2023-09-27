import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollworsComponent } from './follwors/follwors.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFondeComponent } from './page-not-fonde/page-not-fonde.component';
import { PanelComponent } from './panel/panel.component';
import { ProfileFollworeComponent } from './profile-follwore/profile-follwore.component';

const routes: Routes = [
  { path: "" ,redirectTo: "home", pathMatch: 'full'},
  { path:"home" , component:PanelComponent},
  { path: "follwors", component: FollworsComponent },
  { path: "follwors/:id", component: ProfileFollworeComponent },
  { path: "posts" , component: PostsComponent},
  { path: "**", component: PageNotFondeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
