import { Component, inject } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getStorage,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { NgxSpinnerService } from 'ngx-spinner';
import { VideoAiService } from './services/video-ai/video-ai.service';
import { AuthService } from './services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Auth, GoogleAuthProvider } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'video-analyzer';
  videos: any[] = [];
  result_list: any[] = [];

  constructor(
    private loadingService: NgxSpinnerService,
    private videoService: VideoAiService,
    private afAuth: AngularFireAuth
  ) {
    this.getFiles();
  }

  private storage: Storage = inject(Storage);

  uploadFile(input: HTMLInputElement) {
    if (!input.files) return;

    const files: FileList = input.files;
    this.loadingService.show();

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        uploadBytesResumable(storageRef, file)
          .then(() => {
            this.videos = [];
          })
          .finally(() => {
            this.getFiles();
            this.loadingService.hide();
          });
      }
    }
  }
  _loginWithGoogle() {
    this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then((googleResponse: any) => {
        // Successfully logged in
        console.log(googleResponse);
        // Add your logic here
      })
      .catch((err: any) => {
        // Login error
        console.log(err);
      });
  }

  getFiles() {
    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, 'gs://video-analyzer-26cb0.appspot.com');
    console.log(listRef);
    // Find all the prefixes and items.
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(ref(storage, itemRef.name)).then((res) =>
            this.videos.push({ name: itemRef.name, link: res, annotation: '' })
          );
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  analiseContent(title: string, index: number) {
    this.videoService.sendVideo(title).subscribe((res: any) => {
      (this.videos[index].annotation = res.name),
        console.log(this.videos[index]);
    });
  }

  checkContent(title: string, index: number) {
    this.videoService
      .getVideoInformation(this.videos[index].annotation)
      .subscribe((res: any) => {
        console.log(res),
          (this.result_list =
            res.response.annotationResults[0].shotLabelAnnotations);
      });
  }
}
//response.annotationResults.segmentLabelAnnotations;
