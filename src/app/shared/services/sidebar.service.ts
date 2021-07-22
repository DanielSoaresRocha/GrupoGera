import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebar = new Subject<boolean>();
  
  toggleSideBar(toggle: boolean){
    this.sidebar.next(toggle)
    
  }

  sideBarObserver(): Observable<boolean>{
    return this.sidebar.asObservable();
  }
}
