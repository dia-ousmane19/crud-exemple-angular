import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts!: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  getAllPost() {
    return this.api.getAllPost().subscribe(
      (response: any) => {
        this.posts = response;

      }
    )
  }

  deletePost(id: number) {
    return this.api.deletePost(id).subscribe(
      (response: any) => {
        alert('post deleted successfully')
        this.getAllPost()
      }
    )
  }
  


}
