import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comment } from './types';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor( private commentsService:CommentsService) {}

  

  comments$ =  this.commentsService.getComments()

}
