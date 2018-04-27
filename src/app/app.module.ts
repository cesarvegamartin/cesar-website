import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceListComponent } from './components/experiences/experience-list/experience-list.component';
import { ExperienceComponent } from './components/experiences/experience/experience.component';

// services
import { ExperienceService } from './services/experience.service';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    ExperienceListComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
