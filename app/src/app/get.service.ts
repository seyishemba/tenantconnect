import { Injectable } from '@angular/core';
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private vService: VariablesService) {}

  login(){
  	var serv = this.vService.base_url();
  return serv;
  }
}
