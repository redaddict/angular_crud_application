import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { skip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serdemo1Service {

  constructor(private http: HttpClient) { }

  // getDataFromAPI() {
  //   return this.http.get('https://demonodejs.freewebhostmost.com/api/users');
  //   // return this.http.get('https://fakestoreapi.com/products');
  // }

  // postAPIData(data: any) {
  //   return this.http.post('https://demonodejs.freewebhostmost.com/api/users', data);
  //   // return this.http.post('https://fakestoreapi.com/products',data)
  // }

  // putdata(dt: any) {
  //   return this.http.put('https://demonodejs.freewebhostmost.com/api/users/' + dt.id, dt)
  // }

  // async await
  // async deleteData(id: any) {
  //   try {
  //     return await this.http.delete('https://demonodejs.freewebhostmost.com/api/users/' + id, { body: JSON.stringify({ id: id }) }).toPromise();
  //   }
  //   catch {
  //     throw Error;
  //   }
  // }



  // deleteData(id:any){
  //   return this.http.delete('https://demonodejs.freewebhostmost.com/api/users/'+id,{body: JSON.stringify({ id: id })});
  // }


  // about us page- users api

  getUserDataFromApi() {
    return this.http.get('https://reqres.in/api/users');

  }

  // use promises
  getUserDataPromises() {
    return this.http.get('https://reqres.in/api/users').toPromise();

  }


  // getDataWithAsyncPipe(){
  //   return this.http.get('https://reqres.in/api/users');
  // }
  getXEmpDataFromAPI() {
    return this.http.get('https://reqres.in/api/users');
  }


  //all promise

  getXuser() {
    return this.http.get('https://reqres.in/api/users').toPromise();
  }
  getCurruser() {
    return this.http.get('https://demonodejs.freewebhostmost.com/api/users').toPromise();

  }


  postContactAPI(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data)
  }




  // using JSON server  == http://localhost:3000/users

  // post the data
  postAPIData(data: any) {
    return this.http.post('http://localhost:3000/users', data);

  }

  // get the data
  getDataFromAPI() {
    return this.http.get('http://localhost:3000/users');
  
  }

  // update the data
  putdata(dt: any) {
    return this.http.put('http://localhost:3000/users/' + dt.id, dt)
  }

  // drop the data
  async deleteData(id: any) {
    try {
      return await this.http.delete('http://localhost:3000/users/' + id, { body: JSON.stringify({ id: id }) }).toPromise();
    }
    catch {
      throw Error;
    }
  }

}
