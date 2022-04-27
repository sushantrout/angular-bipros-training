import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SongsComponent } from './admin/menu/songs/songs.component';
import { MenuComponent } from './admin/menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { AdminComponent } from './admin/admin.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SongsComponent,
    MenuComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    MenubarModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ProgressBarModule,
    CalendarModule,
    MultiSelectModule,
    PasswordModule,
    CardModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
