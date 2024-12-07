import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostRoomComponent } from './components/postroom/post-room.component';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from 'ng-zorro-antd/form';
import {NzColDirective} from 'ng-zorro-antd/grid';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";
import {NzSkeletonComponent} from 'ng-zorro-antd/skeleton';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import { UpdateRoomComponent } from './components/update-room/update-room.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import { ReservationsComponent } from './components/reservations/reservations.component';
import {NzTableComponent} from "ng-zorro-antd/table";
import {NzTagComponent} from "ng-zorro-antd/tag";



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostRoomComponent,
    UpdateRoomComponent,
    ReservationsComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NzFormItemComponent,
        NzFormControlComponent,
        NzColDirective,
        NzInputDirective,
        ReactiveFormsModule,
        NzFormDirective,
        NzButtonComponent,
        NzCardComponent,
        NzSkeletonComponent,
        NzCardMetaComponent,
        NgOptimizedImage,
        NzIconDirective,
        NzPaginationComponent,
        NzModalModule,
        NzTableComponent,
        NzTagComponent

    ]
})
export class AdminModule { }
