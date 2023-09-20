import { Component, OnInit } from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'app-hls',
  templateUrl: './hls.component.html',
  styleUrls: ['./hls.component.css']
})
export class HlsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const video = document.getElementById('video') as HTMLVideoElement;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(video.src);
      hls.attachMedia(video);
    } else {
    }
  }
}
