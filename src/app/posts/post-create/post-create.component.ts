import {Component} from '@angular/core';

@Component({
    selector: 'app-post-create', // selectors let you include the component elsewhere
    templateUrl: './post-create.component.html', // could also do "template: [html]
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredValue = '';
    newPost = '';

    onAddPost() {
        // console.dir(postInput);

        this.newPost = this.enteredValue;
    }
}
