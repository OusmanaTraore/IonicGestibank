import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.page.html',
  styleUrls: ['./list-admin.page.scss'],
})
export class ListAdminPage implements OnInit {
  adminData:any;
  constructor(public apiService: ApiService) { 
    this.adminData = [];
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllAdmins();
  }

  getAllAdmins() {
    //Get saved list of students
    this.apiService.getListAdmin().subscribe(response => {
      console.log(response);
      this.adminData = response;
      // this.studentsData = response;
    })
  }

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
          
        
        
      

