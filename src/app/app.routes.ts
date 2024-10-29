import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AccountFormComponent } from './component/account-form/account-form.component';
import { AccountListComponent } from './component/account-list/account-list.component';
import { AccountEditComponent } from './component/account-edit/account-edit.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'new', component: AccountFormComponent},
    {path: 'database', component: AccountListComponent, children:[
        {path: ':id', component: AccountEditComponent}
    ]},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }