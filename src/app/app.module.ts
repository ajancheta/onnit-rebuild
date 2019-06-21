import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MissionComponent } from './mission/mission.component';
import { IntroPhotoComponent } from './intro-photo/intro-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MissionComponent,
    IntroPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
