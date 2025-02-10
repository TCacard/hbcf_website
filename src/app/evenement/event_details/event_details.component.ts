import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams.service';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EventDataService } from '../../services/event.service';
import { ClubEvent } from '../../models/event';
import { CitationComponent } from '../../citation/citation.component';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    CitationComponent
  ],
  templateUrl: './event_details.component.html',
  styleUrl: './event_details.component.scss'
})
export class EvenementDetailsComponent {
  event: ClubEvent = {} as ClubEvent;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventDataService
  ) {  }


  ngOnInit(): void {
    this.eventService.getEventById(this.route.snapshot.params['id']).subscribe(event => {
      this.event = event;
    });
  }

}
