import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { UscBookings } from 'src/app/usc-bookings';

@Component({
  selector: 'app-manage-usc-bookings',
  templateUrl: './manage-usc-bookings.component.html',
  styleUrls: ['./manage-usc-bookings.component.css']
})

export class ManageUscBookingsComponent implements OnInit {
  formData = new UscBookings;

  checkTimeSlot : any = false;

  dtOptions: DataTables.Settings = {};
  uscbookings: UscBookings[] = [];
  data:any;

  todayD: Date = new Date;
  today: string = "";
  todayDate = new Date();
  bookMax: string = "";
  maxDate: Date = new Date();

  bookDate: string = "";

  dateTimeTemp: string = "";

  isUpdateSelected : boolean = true;

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private api : ApiService,
              public fb: FormBuilder,
              public toastr: ToastrService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: true,
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25],
      order:[[3,"asc"]]
    }

    this.getAllBookingData();

    this.todayD = new Date;
    this.todayD .setDate( this.todayDate.getDate() + 1 );
    this.today = this.todayD.toJSON().split('T')[0];

    this.maxDate = new Date();
    this.maxDate.setDate( this.todayDate.getDate() + 14 );
    this.bookMax = this.maxDate.toJSON().split('T')[0];
  }

  async ngOnChanges() {
    if (this.uscbookings) {
      await this.getAllBookingData();
      this.dtOptions.data = this.uscbookings
    }
  }

  getAllBookingData(){
    this.api.getAllUscBookings().subscribe(data => {
        this.uscbookings = data.data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next(null);
    });
  }

  editRecordUSC(uscDatas: UscBookings){
    console.log("Editing Record");
    this.formData = uscDatas;
    console.log(uscDatas);
    this.isUpdateSelected = false;
  }

  async deleteRecordUSC(bookingId : any){
    console.log("Deleting Record");
    if(confirm("This action will proceed to delete this record!")) {
      (await this.api.deleteUscBooking(bookingId)).subscribe((res)=>{
        this.toastr.success('SUCCESS', res.message);
        this.getAllBookingData();
      });
    }
  }

  async isTimeSlotTaken(){
    let bookDate = this.formData.bookDate;
    let timeSlot = this.formData.timeSlot;
    (await this.api.checkTimeSlotUsc(bookDate, timeSlot)).subscribe((res)=>{
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

  confirmEditUSC(){
    let name = this.formData.fullName;
    this.formData.bookDateTime = new Date(this.formData.bookDate + "T" +
                                 this.formData.timeSlot + ":00");

    if(this.formData.bookDate != '' && this.formData.timeSlot != ''){
      if(this.checkTimeSlot == false){
        if((confirm("This booking will be updated according to the details you have provided!"))){
          this.api.editUscBooking(this.formData.bookingId, this.formData).subscribe((res)=>{
            this.toastr.success('SUCCESS', 'Booking for ' + name +
            ' has been updated successfully!');
            this.resetEditUSC();
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

  resetEditUSC(){
    this.formData = new UscBookings;
    this.isUpdateSelected = true;
  }

  resetTimeSlot(){
    this.formData.timeSlot = '';
  }
}
