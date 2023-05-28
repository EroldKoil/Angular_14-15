import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  public App = 'TaskManager';
  public Ver = '1.0';
  public API_URL = 'http://...';
}

export const constntsService = new ConstantsService();
