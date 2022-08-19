import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromotionsList } from '../shared/models/Promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  private apiUrl = environment.apiBackend;


  constructor(private http: HttpClient) { }

  getPromotions(page:number):Observable<PromotionsList>{
    return this.http.get<PromotionsList>(`${ this.apiUrl }/promotions?page=${page}`);
  }
}
