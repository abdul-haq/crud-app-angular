import { Component, OnInit } from '@angular/core';
import { User, UserDTO } from '../model/User';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})

export class UserComponentComponent implements OnInit {

  userData:any;
  public addUserData: UserDTO= new UserDTO();
  constructor(public httpService:ApiService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData()
  {
    var url='user';
    this.httpService.get(url).subscribe((res:any)=>{
      this.userData=res;
    })
  }
  getUserDatabyId(id:number)
  {
    var url=`user/${id}`;
    this.httpService.get(url).subscribe((res:any)=>{
      this.addUserData.user=res;
    })
  }
  editUser(id:number){
    
    this.getUserDatabyId(id);
  }
  deleteUser(id:number)
  {
    var url=`user/${id}`;
    if(confirm("Do you want to delete this record ?")) {
      this.httpService.delete(url).subscribe((res:any)=>{
        alert("User deleted !");
        this.getUserData();
      })
    }
    else{
      this.getUserData();
    }
  }
  

  addUser()
  {
    var url='user';
    this.httpService.post(url,this.addUserData.user).subscribe((res:any)=>{
      this.getUserData();
    })
  }
}
