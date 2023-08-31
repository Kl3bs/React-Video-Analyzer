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
    'ya29.a0AfB_byCOV6TxXohW9Yo1ugJWPWu3l5hkH9Zv73Pqs1neYLGzR7m8AAnmOdoP1aMBvcztIUbLQ4hwliSHf3_-2OnB4CjmfpnPj5TlCTrD87t1W6bGCc7S0HmGgFiU-BqN6ou9PZCGld3rREHSHlSK-dSEcZTutKFzN8FqnRsVme-gaCgYKAbgSARISFQHsvYlsV3p0J1Dqmxz1OqOQy_hHBA0179';
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
