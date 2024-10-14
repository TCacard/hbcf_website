import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventDataService } from '../../services/event.service';
import { ClubEvent } from '../../models/event';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.scss'
})
export class EvenementComponent {
  constructor(private router: RouterModule, private eventService: EventDataService) {

  }


  events: ClubEvent[] = [];

  ngOnInit() {
    this.eventService.getEventData().subscribe((data: any) => {
      this.events = data.events;
    });

  }
}
