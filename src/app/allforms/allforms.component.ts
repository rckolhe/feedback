import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allforms',
  templateUrl: './allforms.component.html',
  styleUrls: ['./allforms.component.css']
})
export class AllformsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
    
  }

}
