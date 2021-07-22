import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showSideBar = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.sidebarService.toggleSideBar(this.showSideBar);
    this.showSideBar = !this.showSideBar;
  }

}
