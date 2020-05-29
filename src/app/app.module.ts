import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TypeCheckComponent } from './type-check/type-check.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeCheckComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactusComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'main', component: MainComponent},
      {path: 'typecheck', component: TypeCheckComponent},
      {path: 'contact', component: ContactusComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
