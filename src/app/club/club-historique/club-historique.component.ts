import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ClubDataService } from '../../services/club.service';
import { Club, ClubHistory } from '../../models/club';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CitationComponent } from '../../citation/citation.component';

@Component({
  selector: 'app-club-historique',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    CitationComponent  
  ],
  templateUrl: './club-historique.component.html',
  styleUrl: './club-historique.component.scss'
})
export class ClubHistoriqueComponent {
  history: any;

  constructor(private clubService: ClubDataService, private route: ActivatedRoute ) {
  }


  ngOnInit() {
    const name = this.route.snapshot.routeConfig?.path ?? ""
    this.clubService.getServiceByName(name).subscribe((data: any) => {
      this.history = data
    });

  }
}
