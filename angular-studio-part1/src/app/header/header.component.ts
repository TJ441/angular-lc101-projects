import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  missionName: string = "Mars 2030";
  rocketName: string = "Plasma Max";
}
