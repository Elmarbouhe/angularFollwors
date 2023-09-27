import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollworsService } from '../services/follwors.service';

@Component({
  selector: 'app-profile-follwore',
  templateUrl: './profile-follwore.component.html',
  styleUrls: ['./profile-follwore.component.css']
})
export class ProfileFollworeComponent implements OnInit {

  constructor(private activatedrout: ActivatedRoute,private follorsService : FollworsService){}

  follworId: number = 0;
  follwor : any ;
  ngOnInit(){

    this.activatedrout.paramMap.subscribe((param )=>{
      this.follworId = +param.get('id')!
      this.follwor = this.follorsService.getAll
    })
  }


}
