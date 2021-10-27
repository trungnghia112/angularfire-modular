/*
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@core/services/auth.service';
import Compressor from 'compressorjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage,
              private afs: AngularFirestore,
              private auth: AuthService) {
  }

  compressImage(file: File) {
    // console.log(file);
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    return new Observable(observer => {
      const dataNew: Compressor = new Compressor(file, {
        quality: 1,
        maxWidth: 1024,
        maxHeight: 1024,
        success(result) {
          observer.next(result);
        },
        error(err) {
          console.log(err.message);
        }
      });
    });
  }

  startUpload(file: File, path: string, customMetadata: any = null) {
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // Totally optional metadata
    // const customMetadata = null; // {app: 'My AngularFire-powered PWA!'};

    // The main task
    return this.storage.upload(path, file, {customMetadata});
  }

  startUploadBase64(base64: string, filename: string, path: string) {
    const storageRef = this.storage.ref(path);
    return storageRef.putString(base64, 'base64', {contentType: 'image/png'});
  }

  startUploadBlob(blob: any): Observable<any> {
    // The storage path
    const path = `drive/${this.auth.userSubject.getValue().uid}/${new Date().getTime()}_${blob.name}`;

    // Totally optional metadata
    const customMetadata = null; // {app: 'My AngularFire-powered PWA!'};
    return from(this.storage.upload(path, blob, {customMetadata}));

    // The main task
    /!*return {
      path: path,
      task: this.storage.upload(path, blob, {customMetadata})
    };*!/
  }

  saveFile(body: any) {
    return this.afs.collection(`users/${this.auth.userSubject.getValue().uid}/drive`).add(body);
  }

  /!*
  // Usage example:
  var file = dataURLtoFile('data:text/plain;base64,aGVsbG8gd29ybGQ=', 'hello.txt');
  console.log(file);
  *!/
  dataURLtoFile(dataUrl, filename) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }

  /!*
    //Usage example:
    urltoFile('data:text/plain;base64,aGVsbG8gd29ybGQ=', 'hello.txt', 'text/plain')
  .then((file)=>{
      console.log(file);
    })
  *!/
  urltoFile(url, filename, mimeType) {
    return (fetch(url)
        .then((res) => res.arrayBuffer())
        .then((buf) => {
          return new File([buf], filename, {type: mimeType});
        })
    );
  }
}
*/
