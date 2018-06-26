import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-post-create', // selectors let you include the component elsewhere
    templateUrl: './post-create.component.html', // could also do "template: [html]
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredContent = '';
    enteredTitle = '';
    @Output() postCreated = new EventEmitter();

    onAddPost() {
      const post = {
        title: this.enteredTitle,
        content: this.enteredContent
      };

      this.postCreated.emit(post);
    }
}
