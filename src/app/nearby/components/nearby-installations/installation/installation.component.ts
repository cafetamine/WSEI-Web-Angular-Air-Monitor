import {Component, Input, OnInit} from '@angular/core';
import {Installation} from '../../../../core/domain/installation/Installation';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {

  @Input()
  public installation: Installation;

  public constructor() { }

  public ngOnInit(): void { }

}
