import { Component , OnInit} from '@angular/core';
import { FollworsService } from '../services/follwors.service';

@Component({
  selector: 'follwors',
  templateUrl: './follwors.component.html',
  styleUrls: ['./follwors.component.css']
})
export class FollworsComponent implements OnInit{

follwors : any[] = [] ;
errorMessage ='';
follwor = {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    recived_events_url: "",
    type: "",
    site_admin: false
  }

  ngOnInit(): void {
    this.gitFollwors();
  }

  constructor(private follwrsSrv : FollworsService) {}

  gitFollwors(){
    this.follwrsSrv.getAll()
    .subscribe(
        Response =>{
          this.follwors = Response ;
        }, error => {
          this.errorMessage = error ;
        }
      )
  }



}
