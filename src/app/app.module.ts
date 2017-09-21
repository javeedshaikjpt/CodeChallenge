import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HttpModule } from '@angular/http';
import { SortorderPipe } from './sortorder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SortorderPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
