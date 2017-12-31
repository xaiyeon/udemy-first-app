import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Basically a class like OOP
export class AppComponent {
  title = 'Udemy Tutorial App';
  name = '';

  // Variables for assignment 3
  click_log = [];
  showSecret = false;

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    // Increase the element in the array
    // this.click_log.push(this.click_log.length + 1);
    this.click_log.push(new Date());
  }

}
