import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = 'https://videointelligence.googleapis.com/v1';

@Injectable({
  providedIn: 'root',
})
export class VideoAiService {
  constructor(private http: HttpClient) {}

  token =
    'ya29.a0AfB_byDsEK0ffILthS5yXs9tQzzniB_m13n2vopMrQJo6YTyGadwHFJzdwmH2d66h3bSo3JxHRfz4CUanX43zS1Be-q2vNRdbbk1LpZcvSXm4lIt3maKddfuCiYEnLRIlqmt93leM3zDcDTYxjpQqtxRAgMg24eNJ4dCvNEgzwJZaCgYKAV0SARISFQHsvYlsl8JgDHYqHT-RXFvah1nBVw0179';
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
    return this.http.get(`${url}/operations/${name}`);
  }
}
