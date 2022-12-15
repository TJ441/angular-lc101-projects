import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Set groundhog trap'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Wash car', 'Organize drawers', 'Vacuum house', 'Change oil'];

   targetImage = 'https://unstuckpolitics.com/user_avatar/unstuckpolitics.com/thisguy/240/75841_2.png';

   constructor() { }

   ngOnInit() {
   }

}
