import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public songCards = [
    {
      thumbnail: 'assets/music_thumbnail.jpg',
      title: 'Chill Vibes',
      description: 'Relax and unwind with these chill tunes.'
    },
    {
      thumbnail: 'https://i.scdn.co/image/ab67616d0000b273f3a2c4e1f5a2c4e1f5a2c4e1',
      title: 'Workout Mix',
      description: 'Get pumped with this high-energy playlist.'
    },
    {
      thumbnail: 'https://i.scdn.co/image/ab67616d0000b273f3a2c4e1f5a2c4e1f5a2c4e1',
      title: 'Top Hits',
      description: 'The hottest tracks right now.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
