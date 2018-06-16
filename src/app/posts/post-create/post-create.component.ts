import {Component} from '@angular/core';

@Component({
    selector: 'app-post-create', // selectors let you include the component elsewhere
    templateUrl: './post-create.component.html' // could also do "template: [html]"
})
export class PostCreateComponent {
    newPost = '';

    onAddPost() {
        this.newPost = 'The user\'s post';
    }
}
