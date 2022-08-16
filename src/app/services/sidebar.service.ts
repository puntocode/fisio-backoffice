import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: 'dashboard'},
      ]
     },
     {
      titulo: 'Depilación',
      icono: 'mdi mdi-view-quilt',
      submenu: [
        {titulo: 'Promociones', url: 'promociones'},
      ]
     }
  ]

  constructor() { }
}
