import {Component, Input, OnInit} from '@angular/core';
import {InstallationAddress} from '../../../../../core/domain/installation/InstallationAddress';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: [
    '../installation.component.css',
    './address.component.css'
  ]
})
export class AddressComponent implements OnInit {

  @Input()
  public address: InstallationAddress;

  public constructor() { }

  public ngOnInit(): void {
  }

}
