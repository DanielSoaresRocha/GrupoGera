import { Component, OnInit} from '@angular/core';
import { SidebarService } from '@src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeView = 1;
  showSideBar = true;

  constructor(
    private sidebarService: SidebarService
    ) {

    this.sidebarService.sideBarObserver().subscribe(show => { 
      this.showSideBar = show;
    });
  }

  ngOnInit(): void {
  }

  changeView(view: number){
    this.activeView = view;
  }
}
