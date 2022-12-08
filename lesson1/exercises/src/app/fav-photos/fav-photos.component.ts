import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://unstuckpolitics.com/uploads/default/original/1X/f92362d0bba02b46375da78d23ff44bd9af54c75.png';
  image2 = 'https://unstuckpolitics.com/uploads/default/original/1X/f92362d0bba02b46375da78d23ff44bd9af54c75.png';
  image3 = 'https://unstuckpolitics.com/uploads/default/original/1X/f92362d0bba02b46375da78d23ff44bd9af54c75.png';

  constructor() { }

  ngOnInit() {
  }

}