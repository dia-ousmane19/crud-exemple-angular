import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostModel } from 'src/model/post.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: any;
  formValue!: FormGroup;
  postModel: PostModel = new PostModel();
  postToUpdate!: any;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private api: ApiService,private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.formValue = this.formBuilder.group({
      titre: [''],
      description: ['']
    })
     this.api.getPost(this.id).subscribe(
       (response) => {
        this.postToUpdate = response;
        console.log(this.postToUpdate.titre)
        this.formValue.controls['titre'].setValue(this.postToUpdate.titre);
        this.formValue.controls['description'].setValue(this.postToUpdate.description);
       }
     )
  /*   this.formValue.controls['titre'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName); */


  }

  update() {
    this.postModel.titre = this.formValue.value.titre;
    this.postModel.description = this.formValue.value.description;
    this.api.updatePost(this.postModel, this.id).subscribe(
      (response: any) => {
        alert('post updated successfully')
        this.router.navigate(['posts'])
      }
    )


  }


}
