import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative, SongModel } from 'src/app/model/songs.model';
import { CustomerService } from 'src/app/services/customer.service';
import { SongsService } from 'src/app/services/songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  selectedPageoptions: boolean = false;
  pageOptions: SelectItem[] = [
    {
      label: 'Scrollable',
      value: false,
    },
    {
      label: 'Pageable',
      value: true,
    },
  ];

  selectedSortOptions: string = 'single';
  sortOptions: SelectItem[] = [
    {
      label: 'Single',
      value: 'single',
    },
    {
      label: 'Multiple',
      value: 'multiple',
    },
  ];

  customers: Customer[] = [];

  selectedCustomers: Customer[] = [];

  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  @ViewChild('dt') table!: Table;

  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event: any) {
    this.table.filter(event.value, 'representative', 'in');
  }
}
