import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpModule } from '@angular/http';
import { SortorderPipe } from './sortorder.pipe';
import { Challenge3Component } from './challenge3/challenge3.component';
import { RouterModule, Routes } from '@angular/router';
// defining routes
const appRoutes: Routes = [
  {path: '', component: DataComponent},
  {path: 'formatData', component: Challenge3Component  }
];
@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SortorderPipe,
    Challenge3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
