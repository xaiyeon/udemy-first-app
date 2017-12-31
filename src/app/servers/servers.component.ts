import { Component, OnInit } from '@angular/core';

@Component({
  // to use as an attribute use: [app-servers], then you can use div app-servers
  // We can also use selector as a class with: .app-servers
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  allowUserName = false;
  aUserName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
    
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    // we had to type cast it
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  updateUserName() {
    this.aUserName = this.aUserName;
    this.allowUserName = true;
  }

  onResetUser() {
    if (this.aUserName !== '') {
      this.allowUserName = false;
      this.aUserName = '';
    } else {
      this.allowUserName = true;
    }
  }

}
