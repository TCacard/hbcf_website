import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Team } from '../../../models/team';
import { TeamsService } from '../../../services/teams.service';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/modal/modal.component';


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
  fields = { name: '', email: '' };
  constructor(private router: RouterModule, private teamService: TeamsService, public authService: AuthService, private dialog: MatDialog) {

  }


  competition_teams: Team[] = [];
  leader_teams: Team[] = []

  ngOnInit() {
    this.teamService.getTeams().subscribe((teams: any) => {
      this.competition_teams = teams.filter((team: any) => team.type === 'Compétitive');
      this.leader_teams = teams.filter((team: any) => team.type === 'Dirigeante');
    })
  }


  navigateToMatchCalendar() {
    // this.router.navigate(['/calendrier']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        title: 'Ajouter une équipe',
        fields: [
          { name: 'name', label: 'Nom', type: 'text', required: true },
          { name: 'civility', label: 'Civilité', type: 'select', options: ['Joueurs', 'Joueuses'], required: true },
          { name: 'type', label: 'Type', type: 'select', options: ['Compétitive', 'Dirigeante'], required: true },
          { name: 'picture', label: 'Image', type: 'file', required: false },
        ],
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le modal a été fermé', result);
      // Code pour ajouter le fichier dans le assets/equipes
      this.teamService.postTeam(result, result.picture).subscribe({
        next: (response) => console.log("✅ Réponse du serveur :", response),
        error: (error) => console.error("❌ Erreur lors de la requête :", error)
      });
      window.location.reload();
      
      
    });
  }


}
