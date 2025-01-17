import { Injectable } from '@angular/core';

const IPFS = require('ipfs-mini');

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  ipfs: any;
  constructor() {
    this.ipfs = new IPFS({
      host: 'api.pinata.cloud',
      port: 5001,
      protocol: 'https',
    });
  }

  getIPFS() {
    return this.ipfs;
  }
}
