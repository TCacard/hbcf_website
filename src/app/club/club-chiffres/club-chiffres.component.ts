import { Component } from '@angular/core';
import { ClubDataService } from '../../services/club.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CitationComponent } from '../../citation/citation.component';

@Component({
  selector: 'app-club-chiffres',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    CitationComponent  
  ],
  templateUrl: './club-chiffres.component.html',
  styleUrl: './club-chiffres.component.scss'
})
export class ClubChiffresComponent {

  numbers: any;
  constructor(private clubService: ClubDataService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    const name = this.route.snapshot.routeConfig?.path ?? ""
    this.clubService.getServiceByName(name).subscribe((data: any) => {
      this.numbers = data
    });
  }
}
