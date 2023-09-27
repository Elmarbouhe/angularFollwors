import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { FollworsComponent } from './follwors/follwors.component';
import { DataService } from './services/data.service';
import { FollworsService } from './services/follwors.service';
import { PageNotFondeComponent } from './page-not-fonde/page-not-fonde.component';
import { NavBArComponent } from './nav-bar/nav-bar.component';
import { ProfileFollworeComponent } from './profile-follwore/profile-follwore.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ReactiveFormComponent,
    PostsComponent,
    FollworsComponent,
    PageNotFondeComponent,
    NavBArComponent,
    ProfileFollworeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PostService,
    DataService,
    FollworsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
