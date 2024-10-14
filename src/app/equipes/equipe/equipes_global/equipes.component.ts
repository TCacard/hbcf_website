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

  constructor(private router: RouterModule, private teamService: TeamsService, private dataService: DataService) {

  }


  competition_teams: Team[] = [];
  leader_teams: Team[] = []

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.competition_teams = data.equipes.equipes_competition;
      this.leader_teams = data.equipes.equipe_dirigeante
    });

  }
  navigateToMatchCalendar() {
    // this.router.navigate(['/calendrier']);
}

}
