import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { TracksInterface } from '../../interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, RouterModule, DetailsComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})

export class TracksComponent {
  @Input() tracks_list!: TracksInterface;
}
