import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import "firebase/firestore";
import { map } from 'rxjs/operators';

@Injectable({providedIn: "root"})

export class RifleService {
  constructor(private firestore: AngularFirestore) {}

  getAllAmmo(): Observable<any> {
    return this.firestore
      .collection("ammunition")
      .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { };
        })))
  }
}
