import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  @Input() pokemon: string;
  public versus = [];

  constructor() { }

  ngOnInit() {
  }

}
