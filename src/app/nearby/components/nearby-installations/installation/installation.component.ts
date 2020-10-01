import {Component, Input, OnInit} from '@angular/core';
import {Installation} from '../../../../core/domain/installation/Installation';
import {MeasurementOnlineService} from '../../../services/measurement/MeasurementOnline.service';
import {Observable} from 'rxjs';
import {GetMeasurementByInstallationIdResult} from '../../../../core/application/measurement/result/GetMeasurementByInstallationIdResult';
import {GetMeasurementByInstallationIdCommand} from '../../../../core/application/measurement/command/GetMeasurementByInstallationIdCommand';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: [
    '../nearby-installations.component.css',
    './installation.component.css'
  ]
})
export class InstallationComponent implements OnInit {

  @Input()
  public installation: Installation;

  public $result: Observable<GetMeasurementByInstallationIdResult>;

  public constructor(private readonly _service: MeasurementOnlineService) { }

  public ngOnInit(): void {
    this.$result = this._service.getMeasurementByInstallationId(GetMeasurementByInstallationIdCommand.Create(this.installation.id));
  }

}
