import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // interpolation
  template: ` 
    <!-- Interpolation   -->
    <div class="app">{{ message }}</div>
    <!-- Expressions   -->
    <div class="app">{{ message === 'Hello Worldd' }}</div>
    <div class="app">{{ message.length }}</div>
    <div class="app">{{ message_two.length ? message : 'Nothing here....' }}</div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  // use ! when Property 'message' has no initializer and is not definitely assigned in the constructor.
  message!: string;
  message_two!: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello World!';
    this.message_two = '';
  }
}
