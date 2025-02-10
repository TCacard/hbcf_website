import { Component } from '@angular/core';
import { ClubDataService } from '../../services/club.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CitationComponent } from '../../citation/citation.component';
import { ClubNumbers } from '../../models/club';

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

  numbers: ClubNumbers = {} as ClubNumbers;
  constructor(private clubService: ClubDataService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.clubService.getClubNumbers().subscribe((clubNumbers: ClubNumbers) => {
      this.numbers = clubNumbers
    });
  }
}
