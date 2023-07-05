import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default'
  constructor(private _route: Router) {}
  ngOnInit(): void {
    this._route.events.subscribe({
      next: (val: any) => {
        if (val.url) {
          if (localStorage.getItem('seller') && val.url.includes('seller')) {
            console.log('in seller area');
            this.menuType = 'seller';
          } else {
            console.log('out seller area');
            this.menuType='default';
          }
        }
      },
      error: (err) => {

      }
    })
  }

  logOut(){
    localStorage.removeItem('seller');
    this._route.navigate(['/'])
  }
}
