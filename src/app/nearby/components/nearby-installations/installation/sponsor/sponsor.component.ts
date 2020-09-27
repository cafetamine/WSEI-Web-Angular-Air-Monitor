import {Component, Input, OnInit} from '@angular/core';
import {InstallationSponsor} from '../../../../../core/domain/installation/InstallationSponsor';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: [
    '../installation.component.css',
    './sponsor.component.css'
  ]
})
export class SponsorComponent implements OnInit {

  @Input()
  public sponsor: InstallationSponsor;

  public constructor() { }

  public ngOnInit(): void {
  }

}
