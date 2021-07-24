import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showSideBar = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.sideBarObserver().subscribe(show => { 
      this.showSideBar = show;
    });
  }

  toggleSidebar(){
    this.sidebarService.toggleSideBar(!this.showSideBar);
  }

}
