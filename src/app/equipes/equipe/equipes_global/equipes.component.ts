import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Team } from '../../../models/team';
import { TeamsService } from '../../../services/teams.service';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-equipes',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './equipes.component.html',
  styleUrl: './equipes.component.scss'
})
export class EquipesComponent {

  constructor(private router: RouterModule, private teamService: TeamsService) {

  }


  competition_teams: Team[] = [];
  leader_teams: Team[] = []

  ngOnInit() {
    this.teamService.getCompetitionTeams().subscribe((data: any) => {
      this.competition_teams = data
    });
    this.teamService.getLeadingTeams().subscribe((data: any) => {
      this.leader_teams = data
    });
  }


  navigateToMatchCalendar() {
    // this.router.navigate(['/calendrier']);
  }

}
