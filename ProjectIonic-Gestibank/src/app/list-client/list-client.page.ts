import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.page.html',
  styleUrls: ['./list-client.page.scss'],
})
export class ListClientPage implements OnInit {
  clientsData:any;
  constructor(public apiService: ApiService) {
    this.clientsData = [];
   }

  ngOnInit() {
  }
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllClients();
  }

  getAllClients() {
    //Get saved list of students
    this.apiService.getListClient().subscribe(response => {
      console.log(response);
      this.clientsData = response;
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
          
        
        
      
