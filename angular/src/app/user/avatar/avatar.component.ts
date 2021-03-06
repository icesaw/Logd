import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() avatar: any;
  @Input() height: String;
  @Input() date: Number;
  @Input() type: String;

  constructor() { }

  ngOnInit() {
  }

}
