import { Component, AfterContentInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit {

  @ViewChild (EmployeeComponent) employee!: EmployeeComponent;
  ngAfterContentInit(): void {
      
  }

}
