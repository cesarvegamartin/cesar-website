import { Component, OnInit } from '@angular/core';

// service
import { ExperienceService } from '../../../services/experience.service';
import { NgForm } from '@angular/forms';
import { Experience } from '../../../models/experience';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor( 
    private experienceService: ExperienceService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.experienceService.getProducts();
    this.resetForm();
  }

  onSubmit(experienceForm: NgForm) {
    if (experienceForm.value.$key == null) {
      this.experienceService.addExperience(experienceForm.value);
      this.toaster.success('Experience added', 'Sucessfull Operation');
    }
    else {
      this.experienceService.updateExperience(experienceForm.value);
      this.toaster.success('Experience updated', 'Sucessfull Operation');
    }

    this.resetForm(experienceForm);
  }

  resetForm(experienceForm?: NgForm) {
    if (experienceForm != null) 
      experienceForm.reset();
    this.experienceService.selectedExperience = new Experience();
  }
}
