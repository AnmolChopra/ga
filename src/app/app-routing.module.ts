import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ModelsComponent } from './models/models.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StatementComponent } from './statement/statement.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './AuthGaurd/auth-guard.guard';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard], children: [
    {path: 'coustmer', component: FormComponent, canActivate: [AuthGuardGuard]},
    {path: 'master', component: ModelsComponent, canActivate: [AuthGuardGuard]},
    {path: 'inventory', component: InventoryComponent, canActivate: [AuthGuardGuard]},
    {path: 'statement', component: StatementComponent, canActivate: [AuthGuardGuard]},
    {path: 'setting', component: SettingsComponent, canActivate: [AuthGuardGuard]},    
  ]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
