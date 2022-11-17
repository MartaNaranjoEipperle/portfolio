import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {
  icons: string[] = [];
  skilsTitle = [ 'JavaScript', 'Angular', 'TypeScript', 'HTML', 'GIT', 'Firebase', 
  'CSS', 'Scrum', 'Rest-Api', 'Material design'

  ]

  constructor() { 
    for(let i = 1; i < 11; i++) {
      this.icons.push('icon_'+i);
    }
  }

  ngOnInit(): void {
    
  }

}
