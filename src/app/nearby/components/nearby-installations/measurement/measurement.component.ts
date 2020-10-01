import {Component, Input, OnInit} from '@angular/core';
import {Measurement} from '../../../../core/domain/measurement/Measurement';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  @Input()
  public measurement: Measurement;

  public constructor() { }

  public ngOnInit(): void { }

}
