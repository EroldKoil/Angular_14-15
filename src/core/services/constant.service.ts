import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public App = 'TaskManager';
  public Ver = '1.0';
  public API_URL = 'http://...';
  public sortOptions = {
    selectedSort: 'name',
    isAsk: true,
    sortCases: ['name', 'price', 'count']
  }
}

export const constntsService = new ConstantsService();
