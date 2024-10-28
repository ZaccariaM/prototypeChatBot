import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../service/backend.service';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
    selector: 'app-account-list',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        MatProgressBarModule,
        MatIconModule,
        MatGridListModule,
        MatButtonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './account-list.component.html',
    styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {
    acc: any = [];
    constructor(private backend: BackendService, private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        console.log("siamo passati")
        this.backend.getAccounts().subscribe((arg => {
            this.acc = arg;
            this.changeDetector.detectChanges();
            //console.log("account: ", this.acc)
        }));
    }
    delete(id: any): void {
        console.log(id);
        this.backend.deleteAccount(id).subscribe(arg => {
            console.log("deleted")
        });
    };
}