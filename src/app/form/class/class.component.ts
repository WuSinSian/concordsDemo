// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-class',
//   templateUrl: './class.component.html',
//   styleUrls: ['./class.component.css']
// })
// export class ClassComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
 const BASE_URL = 'http://localhost:3000/todos';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
  data: any = {};
  Response: any = {};
  placeholder = '請輸入數字，最少三位';
  constructor( private http: Http) { }

  ngOnInit() {
    this.data = {
       'firstName': 'Wu',
       'lastName': 'Sean'
    };
  }




    // onSubmit(form){
  //   this.data.firstName = form.controls.firstName.value;
  //   console.log(form);

  // }

  //  doSubmit(f: NgForm, $event) {
  //     console.log(f);
  //     console.log($event);
  //     if (f.invalid) {
  //       alert('表單無效，請檢查欄位!');
  //     }
  // }
// method1

  //  addTodo(data){
  //    alert('POSTING');
  //   this.http.post(BASE_URL,{data :this.data})
  //     .subscribe( data => this.data = data);
  //   alert('POSTED');
  //  }


   addTodo(data){
     alert('POSTING');
    this.http.post(BASE_URL, {data : this.data})
      .subscribe( Response => {
        this.Response = Response.status;
        console.log('POSTED'); }  );
      // .subscribe( data => console.log(data + 'is posted'));
   }

  getSBranch() {
    this.http.get('http://192.168.199.212/BillService/QueryService.aspx' , '0' )


  }


  checkValid(field, form) {
     return form['submitted'] || field['touched'] && field['invalid'];
  }
}
