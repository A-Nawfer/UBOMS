import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';
import { UfcBookings } from 'src/app/ufc-bookings';

@Component({
  selector: 'app-create-ufc-bookings',
  templateUrl: './create-ufc-bookings.component.html',
  styleUrls: ['./create-ufc-bookings.component.css']
})
export class CreateUfcBookingsComponent implements OnInit {

  constructor(private api : ApiService,
              private toastr: ToastrService) { }

  @ViewChild('bookingUFCForm')
  bookingUFCForm?: NgForm;

  readData : any;

  formData = new UfcBookings;

  todayD?: Date;
  today?: String;
  todayDate = new Date();
  bookMax?: String;

  bookDate?: string;
  bookDateTime?: string;

  timeError = "";

  maxDate?: Date;
  tempDate?: Date;

  checkTimeSlot : any = false;

  ngOnInit(): void {
    this.api.getAllUfcBookings().subscribe((res)=>{
      console.log(res, "res==>");
      this.readData = res.data;
    });

    this.todayD = new Date;
    this.todayD .setDate( this.todayDate.getDate());
    this.today = this.todayD.toJSON().split('T')[0];

    this.maxDate = new Date();
    this.maxDate.setDate( this.todayDate.getDate() + 14 );
    this.bookMax = this.maxDate.toJSON().split('T')[0];
  }

  randomString(length: any) {
    var result = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  async isTimeSlotTaken(){
    let bookDate = this.bookDate;
    let timeSlot = this.formData.timeSlot;
    (await this.api.checkTimeSlotUfc(bookDate, timeSlot)).subscribe((res)=>{
      if(res.data == true){
        this.toastr.error('SORRY', 'This slot has already been booked!');
        this.checkTimeSlot = true;
      }
      else if (res.data == false){
        this.toastr.success('YOU ARE IN LUCK', 'This slot is available!');
        this.checkTimeSlot = false;
      }
    });
    return this.checkTimeSlot;
  }

  submitBookingUFC(){
    let bookingId = this.randomString(8);
    let name = this.formData.fullName;
    this.formData.bookingId = bookingId;
    this.formData.bookDate = this.bookDate;
    this.formData.bookDateTime = new Date(this.bookDate + "T" + this.formData.timeSlot + ":00");
    this.formData.userId = "ADMINISTRATOR";

    if(this.bookingUFCForm?.valid){
      if(this.checkTimeSlot == false){
        if((confirm("A booking will be made with the details you have provided!"))){
          this.api.insertUfcBooking(this.formData).subscribe((res)=>{
            this.toastr.success('SUCCESS', 'Booking for ' + name +
            ' has been created successfully!');
            this.ResetFormUFC();
          })
        };
      }
      else{
        this.toastr.error('SORRY', 'This slot has already been booked! Please select another.');
      }
    }
    else{
      this.toastr.error('ERROR', 'Make sure that all the fields are filled correctly!');
    }
  }

  ResetFormUFC(){
    this.bookingUFCForm?.resetForm();
  }
}

