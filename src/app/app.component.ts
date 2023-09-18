import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Forward-Ip': '192.168.1.7'
  })
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id!: string | null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.id = 'valor predeterminado';
    }
    this.getDatos(this.id);
  }
  

  getDatos(id: string) {
    return this.http.get(`https://general.core.blumerdev.com/post_http/post/${id}`, httpOptions).subscribe(data => {
      console.log(data); 
    }, error => {
      console.error('Ha ocurrido un error:', error); 
    });
  }
}
