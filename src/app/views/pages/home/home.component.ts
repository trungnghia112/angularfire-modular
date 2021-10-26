import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Response } from 'express';
import { Observable } from 'rxjs';
// import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items$: Observable<any[]> | undefined;

  constructor(
    public readonly firebaseApp: FirebaseApp,
    @Optional() @Inject(RESPONSE) response: Response,
    firestore: Firestore
  ) {
    if (response) {
      response.setHeader('Cache-Control', 'public,max-age=600');
    }

    const collectionFs: any = collection(firestore, 'customers');
    this.items$ = collectionData(collectionFs);
  }

  ngOnInit(): void {
  }

}
