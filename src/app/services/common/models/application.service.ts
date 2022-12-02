import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { firstValueFrom, Observable } from 'rxjs';
import { Menu } from '../../../contracts/application-configurations/menu';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClientService: HttpClientService) { }
 async getAuthorizeDefinationEndPoints()
 {
   const observable: Observable<Menu[]> = this.httpClientService.get<Menu[]>({
      controller: "ApplicationServices"
   });

   return await firstValueFrom(observable);
  }

}
