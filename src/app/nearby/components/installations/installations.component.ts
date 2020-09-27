import {Component, OnInit} from '@angular/core';
import {InstallationOnlineService} from '../../services/installtion/InstallationOnline.service';
import {GetInstallationsNearbyCommand} from '../../../core/application/installation/command/GetInstallationsNearbyCommand';
import {Observable} from 'rxjs';
import {GetInstallationsResult} from '../../../core/application/installation/result/GetInstallationsResult';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {

  public $result: Observable<GetInstallationsResult>;

  // TODO import by interface
  public constructor(private readonly _service: InstallationOnlineService) { }

  public ngOnInit(): void {
    this.$result = this._service.getNearbyInstallations(GetInstallationsNearbyCommand.Create());
  }

}
