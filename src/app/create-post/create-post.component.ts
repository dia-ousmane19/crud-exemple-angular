import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostModel } from 'src/model/post.model';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formValue!: FormGroup;
  dataPost: PostModel = new PostModel();
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })

  }

  store() {
    this.dataPost.titre = this.formValue.value.titre;
    this.dataPost.description = this.formValue.value.description;

    this.api.store(this.dataPost).subscribe(
      (response) => {
        console.log(this.formValue);
        console.log(response)
        alert('post created successfully');
        this.formValue.reset();
        this.router.navigate(['posts'])
      },
      (error) => {
        alert('something went wrong')
      }
    )
  }

}
