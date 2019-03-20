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
    const config = {
        apiKey: "AIzaSyBtdxrhzlk9TytkcQkaCXzlLMRwNLF6pTA",
        authDomain: "mybooklibrary-c1a3a.firebaseapp.com",
        databaseURL: "https://mybooklibrary-c1a3a.firebaseio.com",
        projectId: "mybooklibrary-c1a3a",
        storageBucket: "mybooklibrary-c1a3a.appspot.com",
        messagingSenderId: "1086595216653"
      };
      firebase.initializeApp(config);
    }
}
