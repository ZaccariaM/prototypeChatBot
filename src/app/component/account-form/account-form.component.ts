import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';

import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup, EmailValidator } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { BackendService } from '../../service/backend.service';



@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent {
  accountForm: FormGroup
  constructor(private backendService: BackendService) {
    this.accountForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')])
    });

    merge(this.accountForm.get('email')!.statusChanges, this.accountForm.get('email')!.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOninit(): void { }

  ngOnSubmit(): void {
    console.log(this.accountForm.value);
    this.backendService.postAccount({
      username: this.accountForm.value.username,
      email: this.accountForm.value.email,
      password: this.accountForm.value.password,
    }).subscribe(arg => { console.log(arg) });
  }

  errorMessage = signal('');

  updateErrorMessage() {
    const emailControl = this.accountForm.get('email')!;
    if (emailControl.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (emailControl.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }


}
