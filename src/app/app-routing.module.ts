import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { StuListComponent } from './stu-list/stu-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { authGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { XEmpComponent } from './x-emp/x-emp.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'',component:HomeComponent},
  // {path:'stulist',component:StuListComponent},
  {path:'updateform/:id',component:UpdateFormComponent,canActivate:[authGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactComponent},
  {path:'xemp',component:XEmpComponent},
  {path:'stulist',canActivateChild:[authGuardGuard],
    children:[
      {path:'',component:StuListComponent},
      {path:'xemp',component:XEmpComponent}
    ]
  },
  {path:'**',redirectTo:''}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
