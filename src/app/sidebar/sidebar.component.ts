import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'badcode-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebar = false;


  showSidebar(){
    this.sidebar = !this.sidebar;
  }

}
