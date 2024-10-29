import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../service/backend.service';
import { Router, RouterOutlet } from '@angular/router';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { AccountEditComponent } from "../account-edit/account-edit.component";


@Component({
    selector: 'app-account-list',
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        MatCardModule,
        MatChipsModule,
        MatProgressBarModule,
        MatIconModule,
        MatGridListModule,
        MatButtonModule,
        AccountEditComponent
    ],
    templateUrl: './account-list.component.html',
    styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {
    data: any = [];
    constructor(
        private backend: BackendService,
        private router: Router
    ) { }

    ngOnInit(): void {
        //console.log("siamo passati")
        this.backend.getAccounts().subscribe((arg => {
            this.data = arg;
        }));
    }

    delete(id: any): void {
        console.log(id);
        this.backend.deleteAccount(id).subscribe(arg => {
            this.data = this.data.filter((element: any) => element.id !== id);
            console.log("deleted")

        });
    };
    editAccount(id: any): void {
        this.router.navigate(['database/', id]);
    }
}