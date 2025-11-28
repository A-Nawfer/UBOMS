import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { UscBookings } from 'src/app/usc-bookings';


@Component({
  selector: 'app-filter-usc',
  templateUrl: './filter-usc.component.html',
  styleUrls: ['./filter-usc.component.css']
})
export class FilterUscComponent implements OnInit {
  dtOptions: any = {};
  uscbookings: UscBookings[] = [];

  month = new Date();
  yesterMonth: String = '';

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

    this.getMonthBookingData();
  }

  async ngOnChanges() {

    if (this.uscbookings) {
      this.getMonthBookingData();
      this.dtOptions.data = this.uscbookings
      console.log(this.uscbookings);
    }
  }

  getMonthBookingData() {
    this.api.getAllTimeUscBookings().subscribe((data)=>{
      this.uscbookings = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next(null);
    })
  }

}
