import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Experience } from '../models/experience';

@Injectable()
export class ExperienceService {

  experienceList: AngularFireList<any>;
  selectedExperience: Experience = new Experience();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return this.experienceList = this.firebase.list('experiences');
  }

  addExperience(experience: Experience) {
    this.experienceList.push({
      place: experience.place,
      title: experience.title,
      description: experience.description,
      start_date: experience.start_date,
      end_date: experience.end_date
    });
  }

  updateExperience(experience: Experience) {
    this.experienceList.update(experience.$key, {
      place: experience.place,
      title: experience.title,
      description: experience.description,
      start_date: experience.start_date,
      end_date: experience.end_date
    });
  }

  deleteExperience($key: string) {
    this.experienceList.remove($key);
  }
}
