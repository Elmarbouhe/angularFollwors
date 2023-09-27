import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class FollworsService extends DataService{

  constructor(http : HttpClient) {
    super(http, 'https://api.github.com/users/IDBRAHIMDEV/followers ')
   }

  }
