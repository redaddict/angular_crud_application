import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { StuListComponent } from './stu-list/stu-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { XEmpComponent } from './x-emp/x-emp.component';
import { PipesPipe } from './pipes.pipe';
import { CustDircDirective } from './cust-dirc.directive';
import { GitdemoComponent } from './gitdemo/gitdemo.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    StuListComponent,
    UpdateFormComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    XEmpComponent,
    PipesPipe,
    CustDircDirective,
    GitdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
