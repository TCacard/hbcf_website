import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PartnersService } from '../../services/partners.service';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.scss'
})
export class OurPartnersComponent {

  partners: any;

  constructor(private partnersService: PartnersService) {}

  ngOnInit() {
    this.partnersService.getAcutalPartnersData().subscribe((data: any) => {
      this.partners = data;
    });
  }

  navigateToPartner(link: string) {
    if( link ) {
      window.open(link, '_blank');
    }
  }
}
