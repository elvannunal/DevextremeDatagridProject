import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {CountryService} from "../../services/country.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allCountry: any;
  allEmployee: any;
  chartOptions ={}
  chartOptions2 = {}

  constructor(
    private employeeService: EmployeeService,
    private countryService: CountryService
  ) {
  }
  ngOnInit(): void {
    this.getCountry();
    this.getAllEmployees();
  }

  getCountry() {
    this.countryService.getCountry().subscribe(
      (response: any) => {
        this.allCountry = response;
        console.log("ülke",this.allCountry)

        const countryCounts: { [key: string]: number } = {};

        this.allCountry.forEach((country: any) => {
          const countryName = country.definition;

          if (countryCounts[countryName]) {
            countryCounts[countryName]++;
          } else {
            countryCounts[countryName] = 1;
          }
        });

        const dataPoints = Object.entries(countryCounts).map(([label, count]) => ({
          label: label,
          y: count
        }));

        this.chartOptions2 = {
          animationEnabled: true,
          theme: "light2",
          zoomEnabled: true,
          exportEnabled: true,
          title: {
            text: "Çalışanların Bulunduğu Ülkeler"
          },
          data: [{
            type: "column",
            dataPoints: dataPoints
          }]
        };
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getAllEmployees() {
    this.employeeService.getEmployee().subscribe(
      (response: any) => {

        this.allEmployee = response.data;

        const employeePositionCounts: { [key: string]: number } = {};

        this.allEmployee.forEach((employee: any) => {

          const positionName = employee.position;

          if (employeePositionCounts[positionName]) {
            employeePositionCounts[positionName]++;
          } else {
            employeePositionCounts[positionName] = 1;
          }
        });

        const totalEmployees = this.allEmployee.length;

        const dataPoints = Object.entries(employeePositionCounts).map(([label, count]) => ({
          label: label,
          y: (count / totalEmployees) * 100
        }));

        this.chartOptions = {
          animationEnabled: true,
          theme: "light2",
          exportEnabled: true,
          title: {
            text: "Çalışanların Pozisyon Dağılımları"
          },
          data: [{
            type: "pie",
            indexLabelTemplate: "{name}: {y}%",
            dataPoints: dataPoints
          }]
        };
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
