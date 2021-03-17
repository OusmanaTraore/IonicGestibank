import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AlertController, ToastController } from '@ionic/angular';
// import { Observable } from 'rxjs';
// import { Admin ,Agent,User } from '../model';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.page.html',
  styleUrls: ['./list-agent.page.scss'],
})
export class ListAgentPage implements OnInit {
  agentsData:any;
  // studentsData: any;
  constructor(
    public apiService: ApiService,
    // private service:UserService,
    // private router : Router,
    // public http:HttpClient,
    // private alertController: AlertController,
    // private toastController: ToastController
    ) {
      this.agentsData = [];
      // this.studentsData = [];
    }
    
    ngOnInit() {
      // this.getAllStudents();
    }
  
    ionViewWillEnter() {
      // Used ionViewWillEnter as ngOnInit is not 
      // called due to view persistence in Ionic
      this.getAllAgents();
    }
  
    getAllAgents() {
      //Get saved list of students
      this.apiService.getListAgent().subscribe(response => {
        console.log(response);
        this.agentsData = response;
        // this.studentsData = response;
      })
    }
  
  
    // delete(item) {
    //   //Delete item in Student data
    //   this.apiService.deleteItem(item.id).subscribe(Response => {
    //     //Update list after delete is successful
    //     this.getAllStudents();
    //   });
    // }
  
    // getAgents(){
      
      // this.service.getAllAgents().subscribe(data=>{
        // console.log(data);
        // console.log('this agent name:',this.Listagents.name) 
        // this.Listagents.name= data['name'];
      // });
      // this.service.getAllUsers().subscribe(data=>{
        //   console.log('====== Utilisateurs  List===== \n')
        //   console.log(data)
        // })
        
        // this.service.getAllAdmins().subscribe(data=>{
          //   console.log('====== Admins  List===== \n')
          //   console.log(data)
          // })
          // this.service.getAllClients().subscribe(data=>{
            //   console.log('======  Client  List===== \n')
            //   console.log(data)
            // })
          // }
          
        }
        
      
