import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(private router: Router){ }

    goToHome(): void{
        this.router.navigate(['/']);
    }
    goToAccount(): void{
        this.router.navigate(['/new']);
    }
    goToDatabase(): void{
        this.router.navigate(['/database']);
    }
}