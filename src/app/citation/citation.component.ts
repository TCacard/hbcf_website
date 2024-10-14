import { Component, Input } from '@angular/core';
import { Citation } from '../models/citation';

@Component({
  selector: 'app-citation',
  standalone: true,
  imports: [],
  templateUrl: './citation.component.html',
  styleUrl: './citation.component.scss'
})
export class CitationComponent {
  @Input() citation!: Citation
}
