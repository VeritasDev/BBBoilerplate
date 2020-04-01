import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class RifleService {
  constructor(private firestore: AngularFirestore) {}

  getRifelData(rifleId: string): Observable<any> {
    return this.firestore
      .collection("rifles")
      .doc(rifleId)
      .get()
      .pipe(switchMap(rifle => of(rifle.data())));
  }
}
