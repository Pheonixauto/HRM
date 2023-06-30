import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

room : Room = {
  totalRomms :10,
  availiableRooms:7,
  bookedRooms:3,
}

roomList : RoomList[] = [
  {
    roomNumber:1,
    roomType:'Alone',
    amenities:'TV, Bathromm',
    price:500,
    photo:'akjak',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('13-Nov-2023'),
    rating:4.5,
  },
  {
    roomNumber:2,
    roomType:'Alone',
    amenities:'TV, Bathromm',
    price:500,
    photo:'akjak',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('13-Nov-2023'),
    rating:5.5,
  },
  {
    roomNumber:3,
    roomType:'Alone',
    amenities:'TV, Bathromm',
    price:500,
    photo:'akjak',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('13-Nov-2023'),
    rating:4.5,
  }
]

constructor(){}
  ngOnInit(): void {

  }

}
