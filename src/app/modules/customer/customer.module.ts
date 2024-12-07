import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzCardComponent, NzCardMetaComponent} from 'ng-zorro-antd/card';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzPaginationComponent} from 'ng-zorro-antd/pagination';
import {NzSkeletonComponent} from 'ng-zorro-antd/skeleton';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDatePickerComponent, NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {FormsModule} from '@angular/forms';
import { ViewBookingsComponent } from './components/view-bookings/view-bookings.component';
import {NzTableComponent} from "ng-zorro-antd/table";
import {NzTagComponent} from "ng-zorro-antd/tag";


@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent,
    ViewBookingsComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        NgOptimizedImage,
        NzButtonComponent,
        NzCardComponent,
        NzCardMetaComponent,
        NzIconDirective,
        NzPaginationComponent,
        NzSkeletonComponent,
        NzModalModule,
        NzDatePickerComponent,
        FormsModule,
        NzDatePickerModule,
        NzTableComponent,
        NzTagComponent
    ]
})
export class CustomerModule { }
