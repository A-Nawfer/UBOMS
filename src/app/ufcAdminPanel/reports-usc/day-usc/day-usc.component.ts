import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { UscBookings } from 'src/app/usc-bookings';

@Component({
  selector: 'app-day-usc',
  templateUrl: './day-usc.component.html',
  styleUrls: ['./day-usc.component.css']
})
export class DayUscComponent implements OnInit {

  dtOptions: any = {};
  uscbookings: UscBookings[] = [];
  data:any;

  yesterday = new Date();
  yesterDate: String = '';

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: true,
      pageLength: 20,
      processing: true,
      lengthMenu : [5, 10, 25],
      order:[[3,"asc"]],
      dom: 'Bfrtip',
      buttons: [
        {
          extend: 'copy',
          text: 'Copy to clipboard',
          className: 'btn btn-primary'
        },
        {
          extend: 'csv',
          text: 'Download as CSV',
          className: 'btn btn-success'
        },
        {
          extend: 'excel',
          text: 'Download as Spreadsheet',
          className: 'btn btn-success'
        },
        {
          extend: 'pdf',
          text: 'Download as PDF',
          className: 'btn btn-danger'
        },
        {
          extend: 'print',
          text: 'Print Preview',
          className: 'btn btn-dark'
        }
      ]
    }

    this.yesterday.setDate(this.yesterday.getDate() - 1);
    this.yesterday.setHours(0,0,0,0);

    var year = this.yesterday.getFullYear();

    var month = (this.yesterday.getMonth() + 1).toString();
    if (month.length == 1){
      month = '0'+ month;
    }
    else{
      month = month
    }

    var day = (this.yesterday.getDate()).toString();
    if (day.length == 1){
      day = '0'+ day;
    }
    else{
      day = day
    }

    this.yesterDate = year + "-" + month + "-" + day;

    console.log(this.yesterDate);
    this.getDayBookingData(this.yesterDate);
  }

  async ngOnChanges() {
    var year = this.yesterday.getFullYear();
    var month = this.yesterday.getMonth() + 1;
    var day = this.yesterday.getDate();

    this.yesterDate = year + "-" + month + "-" + day;

    if (this.uscbookings) {
      this.getDayBookingData(this.yesterDate);
      this.dtOptions.data = this.uscbookings
      console.log(this.uscbookings);
    }
  }

  getDayBookingData(yesterday : String) {
    this.api.getDayBookingsUsc(yesterday).subscribe((data)=>{
      this.uscbookings = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next(null);
    })
  }

}
