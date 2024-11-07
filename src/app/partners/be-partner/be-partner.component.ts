import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-be-partner',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './be-partner.component.html',
  styleUrl: './be-partner.component.scss'
})
export class BePartnerComponent implements OnInit {

  become_partner: any;

  constructor(private partnersService: PartnersService) {}

  ngOnInit() {
    this.partnersService.getBecomePartnerData().subscribe((data: any) => {
      this.become_partner = data;
    });
  }

}
