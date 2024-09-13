import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service';
import { TracksInterface } from '../../interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {

  tracks_list: TracksInterface | undefined;

  constructor(private route: ActivatedRoute, private service: Service) {}

  ngOnInit() {
    const tracks_listId = parseInt(this.route.snapshot.params['id'], 10);
    this.service.getTracksById(tracks_listId).then(tracks_list => {
      this.tracks_list = tracks_list;
    });
  }
}