import { Component, Input } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // posts = [
    //     {title: 'First Post', content: 'This is the first post'},
    //     {title: 'Second Post', content: 'This is the second post'},
    //     {title: 'Third Post', content: 'This is the third post'}
    // ];
    @Input() posts: Post[] = [];
    postsService: PostsService;

    constructor(postsService: PostsService) {
      this.postsService = postsService;
    }
}
