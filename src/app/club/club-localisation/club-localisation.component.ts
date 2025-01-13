import { CommonModule } from '@angular/common';
import { Component, OnInit,   } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CitationComponent } from '../../citation/citation.component';
import { ClubDataService } from '../../services/club.service';
import { ClubLocation } from '../../models/club';


@Component({
  selector: 'app-club-localisation',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './club-localisation.component.html',
  styleUrls: ['./club-localisation.component.scss'],
  schemas: []
})
export class ClubLocalisationComponent {
  location: any;
  constructor(private clubService: ClubDataService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.clubService.getClubLocation().subscribe((clubLocation: ClubLocation) => {
      this.location = clubLocation
    });
  }


  openNavigation(location: string): void {
    const cleanLocationString = location.replace(/<br\s*\/?>/gi, '');

    const destination = encodeURIComponent(cleanLocationString);

    
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    
    const appleMapsUrl = `http://maps.apple.com/?daddr=${destination}`;

    
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    
    if (isIOS) {
      window.open(appleMapsUrl, '_blank');
    } else {
      window.open(googleMapsUrl, '_blank');
    }
  }

}
