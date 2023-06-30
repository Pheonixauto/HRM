import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TestService } from './test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  data: any;
  constructor(private _testService: TestService) {

  }
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this._testService.getUserList().subscribe((res: any) => {
      const promise = new Promise(resolve => {
        resolve(res.data)
      });
      // this.data=res.data;
      promise.then((result:any)=>{
        this.getData(result)
      })
    }
    );

  }

  getData(re?:any) {
    console.log(re)
  }
}
