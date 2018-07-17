import {Component} from '@angular/core';

import {Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
    selector: 'app-post-create', // selectors let you include the component elsewhere
    templateUrl: './post-create.component.html', // could also do "template: [html]
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredContent = '';
    enteredTitle = '';

    constructor(public postsService: PostsService) {}

    onAddPost(form: NgForm) {
      if (form.invalid) {
        return;
      }

      this.postsService.addPost(form.value.title, form.value.content);
      form.resetForm();
    }
}
