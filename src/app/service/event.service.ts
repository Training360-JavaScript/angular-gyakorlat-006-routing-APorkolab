import { Injectable } from '@angular/core';
import { Event } from './../model/event';
import { Location } from './../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  list: Event[] = [
    {
      name: 'Babiagorai Riparievich Metell születésnapja',
      date: '2022. július 23.',
      time: '22:11:55',
      location: {
        address: 'Jókai Mór utca 12.',
        city: 'Békéscsaba',
        country: 'Magyarország',
      },
    },
    {
      name: 'Új hónaljzsírozó gép felavatása',
      date: '2024. december 20.',
      time: '09:00',
      location: {
        address: 'Lyóhejesiró utca 4.',
        city: 'Vaggyesznyó',
        country: 'Ukrajna',
      },
    },
    {
      name: 'Tarara terere',
      date: '2222. február 02.',
      time: '22:00',
      location: {
        address: 'Tar Lőrinc utca 22.',
        city: 'Tar',
        country: 'Magyarország',
      },
    },
  ];

  getAll(): Event[] {
    return this.list;
  }
}
