import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../services/experience.service';
import { Experience } from '../../../models/experience';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  experienceList: Experience[];

  constructor(
    private experienceService: ExperienceService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.experienceService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.experienceList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.experienceList.push(x as Experience)
        });
      })
  }

  onEdit(experience: Experience) {
    this.experienceService.selectedExperience = Object.assign({}, experience);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.experienceService.deleteExperience($key);
      this.toaster.success('Experience deleted', 'Successfull Operation');
    }
  }

}
