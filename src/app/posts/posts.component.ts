import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TypicodeService } from '../typicode.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  @Input() userId!: number;
  @Input() userName!: string;
  constructor(private _service: TypicodeService) { }
  postList: Post[] = [];
  loadMore: boolean = false;
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getPosts();
  }
  getPosts(): void {
    this._service.getPosts(this.userId).subscribe(posts => {
      this.postList =  posts.map((post) => {return {id: post.id, title: post.title, body: post.body}})
    });
  }

}
interface Post {
  id: number;
  title: string;
  body: string;
}
