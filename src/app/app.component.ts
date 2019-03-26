import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-book-library';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBUx12ZAERrmPdBROEadDe3dDOszHtG0BY",
      authDomain: "mybooklibrary2-38a55.firebaseapp.com",
      databaseURL: "https://mybooklibrary2-38a55.firebaseio.com",
      projectId: "mybooklibrary2-38a55",
      storageBucket: "",
      messagingSenderId: "509723882190"
    };
    firebase.initializeApp(config);

  }
}
