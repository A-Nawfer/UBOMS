import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }

  //Connecting the frontend to the backend
  UFCapi = "http://localhost:3000/ufcbookings";
  USCapi = "http://localhost:3000/uscbookings";

  /*UFC BOOKING FUNCTIONALITIES*/

  //Get all UFC Bookings Data
  getAllUfcBookings():Observable<any>{
    return this.http.get(`${this.UFCapi}`+'/admin');
  }

  //Get Entire UFC Bookings List for Filtered Report
  getAllTimeUfcBookings():Observable<any>{
    return this.http.get(`${this.UFCapi}`+'/all');
  }

  //Create a Booking in UFC
  insertUfcBooking(ufcBooking: any):Observable<any>{
    return this.http.post(`${this.UFCapi}`, ufcBooking)
  }

  //Edit a UFC Booking
  editUfcBooking(bookingId: any, ufcBooking: any):Observable<any>{
    return this.http.put(`${this.UFCapi}/${bookingId}`, ufcBooking);
  }

  //Delete a UFC Booking
  async deleteUfcBooking(bookingId : any):Promise<Observable<any>>{
    return this.http.delete(`${this.UFCapi}/${bookingId}`);
  }

  //Check if UFC Booking Slot is taken
  async checkTimeSlotUfc(bookDate: any, timeSlot: any):Promise<Observable<any>>{
    console.log(`${this.UFCapi}/${bookDate}/${timeSlot}`);
    return this.http.get(`${this.UFCapi}/${bookDate}/${timeSlot}`);
  }

  //UFC Bookings Report Functions
  //Get UFC Bookings Day Report
  getDayBookingsUfc(yesterday : any):Observable<any>{
    return this.http.get(`${this.UFCapi}/dayReport/${yesterday}`)
  }

  //Get UFC Bookings Month Report
  getMonthBookingsUfc(month : any):Observable<any>{
    return this.http.get(`${this.UFCapi}/monthReport/${month}`)
  }


  /*USC BOOKING FUNCTIONALITIES*/

  //Get all USC Bookings Data
  getAllUscBookings():Observable<any>{
    return this.http.get(`${this.USCapi}`+'/admin');
  }

  //Get Entire UFC Bookings List for Filtered Report
  getAllTimeUscBookings():Observable<any>{
    return this.http.get(`${this.USCapi}`+'/all');
  }

  //Create a Booking in USC
  insertUscBooking(uscBooking: any):Observable<any>{
    return this.http.post(`${this.USCapi}`, uscBooking)
  }

  //Edit a USC Booking
  editUscBooking(bookingId: any, uscBooking: any):Observable<any>{
    return this.http.put(`${this.USCapi}/${bookingId}`, uscBooking);
  }

  //Delete a USC Booking
  async deleteUscBooking(bookingId : any):Promise<Observable<any>>{
    return this.http.delete(`${this.USCapi}/${bookingId}`);
  }

  //Check if USC Booking Slot is taken
  async checkTimeSlotUsc(bookDate: any, timeSlot: any):Promise<Observable<any>>{
    console.log(`${this.UFCapi}/${bookDate}/${timeSlot}`);
    return this.http.get(`${this.USCapi}/${bookDate}/${timeSlot}`);
  }

  //USC Bookings Report Functions
  //Get USC Bookings Day Report
  getDayBookingsUsc(yesterday : any):Observable<any>{
    console.log(`${this.USCapi}/dayReport/${yesterday}`);
    return this.http.get(`${this.USCapi}/dayReport/${yesterday}`)
  }

  //Get USC Bookings Month Report
  getMonthBookingsUsc(month : any):Observable<any>{
    return this.http.get(`${this.USCapi}/monthReport/${month}`)
  }


}
