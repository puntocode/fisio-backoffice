import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Page } from 'src/app/shared/models/Page';
import { Promotion } from 'src/app/shared/models/Promotions';
import { PromotionsService } from '../../services/promotions.service';
import { PromotionsList } from '../../shared/models/Promotions';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  promotions:Promotion[] = [];

  //data-table
  ColumnMode = ColumnMode;
  page = new Page();
  loadingIndicator!:boolean;

  constructor(private promotionService:PromotionsService) { }

  ngOnInit(): void {
    this.filter({ offset: 0 });
  }


  /**
   * Rellena la tabla con nuevos datos según el número de página
   * @param pageInfo el número de pagina seleccionada
   */
   filter(pageInfo:any) {
    console.log(pageInfo);
    this.loadingIndicator = true;

    this.page.pageNumber = pageInfo.offset;
    const pageNumber = Number(pageInfo.offset+1);

    this.promotionService.getPromotions(pageNumber)
      .subscribe( (resp:PromotionsList) => {
        console.log(resp);
        this.page.totalElements = resp.totalDocs;
        this.promotions = resp.docs;
        this.loadingIndicator = false;
        this.page.size = resp.limit;
      })
  }

}
