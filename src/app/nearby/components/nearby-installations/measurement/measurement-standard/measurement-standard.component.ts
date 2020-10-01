import {Component, Input, OnInit} from '@angular/core';
import {MeasurementStandard} from '../../../../../core/domain/measurement/MeasurementStandard';

@Component({
  selector: 'app-measurement-standard',
  templateUrl: './measurement-standard.component.html',
  styleUrls: ['./measurement-standard.component.css']
})
export class MeasurementStandardComponent implements OnInit {

  @Input()
  public standard: MeasurementStandard;

  public constructor() { }

  public ngOnInit(): void { }

}
