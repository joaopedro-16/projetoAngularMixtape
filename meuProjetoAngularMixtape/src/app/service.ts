import { Injectable } from '@angular/core';
import { TracksInterface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class Service {

  url = 'http://localhost:3000/jsonTracks';

  async getAllTracks(): Promise<TracksInterface[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getTracksById(id: number): Promise<TracksInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}