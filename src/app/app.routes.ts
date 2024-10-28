import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import { AccountListComponent } from './component/account-list/account-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'new', component: AccountFormComponent},
    {path: 'database', component: AccountListComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }