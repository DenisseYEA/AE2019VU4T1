import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public posts
  constructor(private postService: PostService) {
    this.posts = postService.post
  }

  ngOnInit() {
  }

}
