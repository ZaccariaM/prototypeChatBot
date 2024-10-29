import { Component, Input, input } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-edit',
  standalone: true,
  imports: [],
  templateUrl: './account-edit.component.html',
  styleUrl: './account-edit.component.css'
})
export class AccountEditComponent {
  edit: any =[];
  id: string;

  constructor(private route: ActivatedRoute, private backendService: BackendService){}

  ngOnInit(): void{
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id= params.get('id')!
      this.backendService.getAccountById(this.id).subscribe((arg=>{
        this.edit= arg;
        console.log(this.edit)
      }));
    })
  }
}
