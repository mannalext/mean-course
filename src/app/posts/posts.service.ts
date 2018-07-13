import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = []; // making it private means nobody can reach inside and change it
  // sooo we need a getter and setter
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // return this.posts; // don't want to return the original array because arrays in JS are reference types
    // so instead we can do this:
    return [...this.posts]; // [] creates a new array and '...' takes all the elements of the this.posts array and puts them in the new one
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}; // take in the arguments for a new post and then create it here
    this.posts.push(post); // add the new post to our master list of posts
    this.postsUpdated.next([...this.posts]);
  }
}
