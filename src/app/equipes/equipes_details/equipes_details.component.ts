import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams.service';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-equipes',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule    
  ],
  templateUrl: './equipes_details.component.html',
  styleUrl: './equipes_details.component.scss'
})
export class EquipesDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService
  ) {}
  team: any; // Par défaut, team est null


  ngOnInit(): void {
    this.getTeamById();
  }


  getTeamById(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0); // Récupère l'ID dans l'URL
    this.teamsService.getTeamById(id).subscribe(team => {
      this.team = team;
    });
  }

  navigateToMatchCalendar() {
    // this.router.navigate(['/calendrier']);
}

}
