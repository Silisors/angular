import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Hls from 'hls.js';
@Component({
  selector: 'app-blumer-vid',
  templateUrl: './blumer-vid.component.html',
  styleUrls: ['./blumer-vid.component.css']
})
export class BlumerVidComponent implements OnInit {
  id!: string | null;
  public base_url: string = 'https://general.core.blumerdev.com/post_http/post/';
  public postData: any; 
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDatos();
  }

  getDatos() {
    const url = `${this.base_url}/${this.id}`;
    this.http.get(url)
      .subscribe({
        error: (err: any) => {
          console.log(err)
        },
        next: (resp: any) => {
          this.postData = resp; 
          console.log(resp);
          const video = document.getElementById('video') as HTMLVideoElement;
          const videoUrl = resp.media[0].abr; 
          const httpOptions = {
            headers: new HttpHeaders({
              'X-Forward-Ip': '192.168.1.7',
              'Cookie': resp.media[0].signature
            })
          };
  
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);
          } else {
            console.log('HLS.js no es compatible en este navegador.');
            video.src = videoUrl;
          }
        }
      });
  }
  
  
}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import Hls from 'hls.js';

// @Component({
//   selector: 'app-blumer-vid',
//   templateUrl: './blumer-vid.component.html',
//   styleUrls: ['./blumer-vid.component.css']
// })
// export class BlumerVidComponent implements OnInit {
//   id!: string | null;
//   public base_url: string = 'https://general.core.blumerdev.com/post_http/post/';
//   public postData: any;

//   constructor(private route: ActivatedRoute, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id');
//     this.getDatos();
//   }

//   getDatos() {
//     const url = `${this.base_url}/${this.id}`;

//     this.http.get(url).subscribe({
//       error: (err: any) => {
//         console.log(err);
//       },
//       next: (resp: any) => {
//         this.postData = resp;
//         console.log(resp);

//         const video = document.getElementById('video') as HTMLVideoElement;
//         const videoUrl = resp.media[0].abr;

//         const cookieHeaderValue = resp.media[0].signature;

//         const httpOptions = {
//           headers: new HttpHeaders({
//             'X-Forward-Ip': '192.168.1.7',
//             'Cookie': cookieHeaderValue
//           })
//         };

//         if (Hls.isSupported()) {
//           const hls = new Hls();
//           hls.loadSource(videoUrl);
//           hls.attachMedia(video);
//         } else {
//           console.log('HLS.js no es compatible en este navegador.');
//           video.src = videoUrl;
//         }
//       }
//     });
//   }
// }
