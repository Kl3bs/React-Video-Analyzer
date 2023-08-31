import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = 'https://videointelligence.googleapis.com/v1';

@Injectable({
  providedIn: 'root',
})
export class VideoAiService {
  constructor(private http: HttpClient) {}

  token =
    'ya29.a0AfB_byB0gmlhZRpSYa36NadyzYgnMHzp583aITGWW7mQdqbohCKelHqzutJNjCPF4_qJue2VhsZQ-pQ1kIDnTV_XNlBKhtckiFCYOx4zpJhsKY47v57MJXVJk9pt11u4OpctzR3mcJ7vVNgzJbEi0KGn5NKs6kQVDlgIHPmADG3SaCgYKAQASARISFQHsvYlsBkEn-tI9pl4QQFOzLZXpCA0179';
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  sendVideo(videoPath: string) {
    return this.http.post(
      `${url}/videos:annotate `,
      {
        inputUri: `gs://video-analyzer-26cb0.appspot.com/${videoPath}`,
        features: ['LABEL_DETECTION', 'OBJECT_TRACKING'],
      },
      { headers: this.headers }
    );
  }

  getVideoInformation(name: string) {
    return this.http.get(`${url}/operations/${name}`, {
      headers: this.headers,
    });
  }
}
