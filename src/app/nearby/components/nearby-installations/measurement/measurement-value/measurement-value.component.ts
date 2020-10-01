import {Component, Input, OnInit} from '@angular/core';
import {MeasurementValue} from '../../../../../core/domain/measurement/MeasurementValue';

@Component({
  selector: 'app-measurement-value',
  templateUrl: './measurement-value.component.html',
  styleUrls: ['./measurement-value.component.css']
})
export class MeasurementValueComponent implements OnInit {

  @Input()
  public value: MeasurementValue;

  public constructor() { }

  public ngOnInit(): void { }

}
