import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NavDataService } from '../services/nav-data.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { Nav, NavItem } from '../models/nav';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { get } from 'http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    CommonModule
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigation: Nav = {} as Nav;
  isSubItemsVisible: boolean[] = [];
  isMenuOpened: boolean = false; // État du menu burger
  user: User = {} as User;

  constructor(private navDataService: NavDataService, private auhtService: AuthService) {}

  ngOnInit() {
    this.navDataService.getNavData().subscribe((nav: any) => {
      this.navigation = nav;
      // this.isSubItemsVisible = new Array(this.navigation.length).fill(false);
    });

    if (this.auhtService.isLoggedIn()) {
      this.getUser();
    }
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleSubItems(index: number): void {
    this.isSubItemsVisible[index] = !this.isSubItemsVisible[index];
  }

  NavigateToLink(link: string) {
    window.open(link, "_blank");
  }


  getUser() {
    this.user = this.auhtService.getUser();
    console.log(this.user);
  }
}
