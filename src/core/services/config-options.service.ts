import {Injectable} from '@angular/core';

import { ConfigModel } from './products.interface';

@Injectable()
export class ConfigOptionsService {
  private config: ConfigModel = {};

  setConfig(config: ConfigModel): ConfigModel {
    this.config = {
      ...this.config,
      ...config
    };
    return this.config;
  }

  setConfigProperty(key: string, value: any): void {
    this.config = {
      ...this.config,
      [key]: value
    }
  }
}