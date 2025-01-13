import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavDataService } from './services/nav-data.service';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Nav } from './models/nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: any;
  nav: Nav = {} as Nav;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private navigationService: NavDataService) { }

  ngOnInit(): void {
    this.navigationService.getNavData().subscribe((navigation: Nav) => {
      this.nav = navigation
    })

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const pageTitle = this.findTitleByRoute(this.router.url);
        this.navigationService.setTitle(pageTitle);
      });
  }

  /**
   * Recherche le titre correspondant à la route active dans la structure `nav`
   * @param route Route actuelle
   * @returns Titre trouvé ou une chaîne vide
   */
  private findTitleByRoute(route: string): string {
    for (const item of this.nav.navItems) {
      if (item.route === route) {
        return item.title;
      }
      if (item.subTitles) {
        for (const subItem of item.subTitles) {
          if (subItem.route === route) {
            return subItem.title;
          }
        }
      }
    }
    return '';
  }
}
