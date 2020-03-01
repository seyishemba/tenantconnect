import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
	variable_base_url = 'localhost';
  constructor() { }

  base_url(){
  return 'ss';
  }
}
