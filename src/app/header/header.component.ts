import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Navigation, NavItem } from '../models/navigation.model';
import { NavDataService } from '../services/nav-data.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

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
  navItems: NavItem[] = [];
  isSubItemsVisible: boolean[] = [];
  isMenuOpened: boolean = false; // État du menu burger
  constructor(private navDataService: NavDataService) {}

  ngOnInit() {
    this.navDataService.getNavData().subscribe((data: any) => {
      this.navItems = data;
      this.isSubItemsVisible = new Array(this.navItems.length).fill(false);
    });
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened; // Ouvre ou ferme le menu burger
  }

  toggleSubItems(index: number): void {
    this.isSubItemsVisible[index] = !this.isSubItemsVisible[index]; // Gère l'affichage des sous-menus
  }
}
