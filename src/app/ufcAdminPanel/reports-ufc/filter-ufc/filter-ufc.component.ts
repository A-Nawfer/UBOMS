import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UfcBookings } from 'src/app/ufc-bookings';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-filter-ufc',
  templateUrl: './filter-ufc.component.html',
  styleUrls: ['./filter-ufc.component.css']
})
export class FilterUfcComponent implements OnInit {

  dtOptions: any = {};
  ufcbookings: UfcBookings[] = [];
  data:any;

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

    this.getAllTimeBookingData();
  }

  async ngOnChanges() {

    if (this.ufcbookings) {
      this.getAllTimeBookingData();
      this.dtOptions.data = this.ufcbookings
      console.log(this.ufcbookings);
    }
  }

  getAllTimeBookingData() {
    this.api.getAllTimeUfcBookings().subscribe((data)=>{
      this.ufcbookings = data.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next(null);
    })
  }

}
