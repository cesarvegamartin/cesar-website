import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';

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
    ExperienceComponent,
    ExperienceListComponent,
    ExperiencesComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
