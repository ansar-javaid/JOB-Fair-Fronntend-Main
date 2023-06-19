import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-personal',
  templateUrl: './display-personal.component.html',
  styleUrls: ['./display-personal.component.scss']
})
export class DisplayPersonalComponent {
  @Input() name: string = ''
  @Input() phone: string = ''
  @Input() summary: string = ''
  @Input() linkedIn: string = ''
  @Input() image: string = ''
  @Input() address: string = ''
  @Input() webLink: string = ''
  @Input() email: string | null = ''
}
