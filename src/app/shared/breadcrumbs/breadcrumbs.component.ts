import { Component, OnDestroy } from '@angular/core';
import {ActivationEnd, Router } from '@angular/router';
import { filter, map  } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!:string;
  public tituloSubs$!:Subscription;

  constructor(private router:Router) {
    this.tituloSubs$ = this.getTitle().subscribe( ({titulo}) => this.titulo = titulo );
  }


  getTitle(){
    return this.router.events.pipe(
      filter(e => e instanceof ActivationEnd && (Object.keys(e.snapshot.data).length > 0) ),
      map( e => e instanceof ActivationEnd ? e.snapshot.data : {})
    )
  }


  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

}
