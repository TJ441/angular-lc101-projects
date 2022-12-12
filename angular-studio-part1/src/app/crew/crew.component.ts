import { Component } from '@angular/core';

@Component({
  selector: 'crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {
  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli"]
}
