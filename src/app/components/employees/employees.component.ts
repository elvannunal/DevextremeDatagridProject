import { Component } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { EmployeeDto } from "../../models/EmployeeDto/EmployeeDto";
import { AddEmployee } from "../../models/EmployeeDto/AddEmployeeDto";
import { UpdateEmployeeDto } from "../../models/EmployeeDto/UpdateEmployeeDto";
import {CountryService} from "../../services/country.service";


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  allEmployee: EmployeeDto[] = [];
  addEmployeePopupVisible: boolean = false;
  editEmployeePopupVisible: boolean = false;
  deleteEmployeePopupVisible: boolean = false;
  isUpdating: boolean = false;
  selectedEmp: any;
  isUpdate: boolean = false;

  constructor(private employeeService: EmployeeService,
              private countryService: CountryService) { }

  ngOnInit() {
    this.getAllEmployees();

  }

  newEmployee: AddEmployee = {
    firstName: '',
    lastName: '',
    title: '',
    position: '',
    birthDate: '',
    hireDate: '',
    notes: '',
    address: '',
    countryCode: ''
  };

  editEmp: UpdateEmployeeDto = {
    id: '',
    firstName: '',
    lastName: '',
    title: '',
    position: '',
    birthDate: '',
    hireDate: '',
    notes: '',
    address: '',
    countryCode: ''
  };

  selectedEmployee: EmployeeDto = {
    id: '',
    createBy: '',
    updateBy: '',
    createDate: '',
    updateDate: '',
    firstName: '',
    lastName: '',
    title: '',
    position: '',
    birthDate: '',
    hireDate: '',
    notes: '',
    address: '',
    countryCode: ''
  };

  //Bütün employee verileri getirme işlemi

  getAllEmployees() {
    this.employeeService.getEmployee().subscribe(
      (response: any) => {
        this.allEmployee = response.data

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  // Ekleme İşlemleri

  showAddEmployeePopup(): void {
    this.addEmployeePopupVisible = true;
  }
  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      (response: any) => {
        alert('Employee added successfully');
        console.log('Add response:', response);
        this.addEmployeePopupVisible = false;
        this.getAllEmployees();
      },
      error => {
        console.error(error);
        this.addEmployeePopupVisible = false;
      }
    );
  }

  closeAddEmployeePopup(): void {
    this.addEmployeePopupVisible = false;
  }


  //Güncelleme işlemleri
  editEmployee(selectedEmployee: EmployeeDto) {
    debugger
    this.editEmployeePopupVisible = true;
    this.selectedEmployee = {
      id: selectedEmployee.id,
      firstName: selectedEmployee.firstName,
      lastName: selectedEmployee.lastName,
      title: selectedEmployee.title,
      position: selectedEmployee.position,
      birthDate: selectedEmployee.birthDate,
      hireDate: selectedEmployee.hireDate,
      notes: selectedEmployee.notes,
      address: selectedEmployee.address,
      countryCode: selectedEmployee.countryCode,
      createBy: selectedEmployee.createBy,
      createDate: selectedEmployee.createDate,
      updateBy: selectedEmployee.updateBy,
      updateDate: selectedEmployee.updateDate
    }
    this.isUpdate = true;
    this.selectedEmp = { ...selectedEmployee };
    this.editEmp = { ...selectedEmployee };
  }

  updateEmployee() {
    debugger
    this.employeeService.updateEmployee(this.editEmp.id, this.editEmp).subscribe(
      (response: any) => {
        alert('Employee updated successfully');
        console.log('Update response:', response);
        this.editEmployeePopupVisible = false;
        this.getAllEmployees();
      },
      error => {
        console.error(error);
        this.editEmployeePopupVisible = false;
      }
    );
  }


  closeEditEmployeePopup(): void {
    this.editEmployeePopupVisible = false;
  }

  //Sağ Click Menüsü

  onContextMenuPreparing(e: any): void {

    const contextMenuItems = [];

    const addEmployeeItem = {
      text: 'Ekle',
      onItemClick: () => {
        this.showAddEmployeePopup();
      }
    };
    const updateEmployeeItem = {
      text: 'Güncelle',
      onItemClick: () => {
        this.editEmployee(e.row.data);
      }
    };
    const deleteEmployeeItem = {
      text: 'Sil',
      onItemClick: () => {
        this.showDeleteConfirmation(e.row.data);
      }
    };
    contextMenuItems.push(addEmployeeItem, updateEmployeeItem, deleteEmployeeItem);
    e.items = contextMenuItems;
  }
  //silme işlemleri

  showDeleteConfirmation(selectedEmployee: EmployeeDto): void {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      this.deleteEmploye(selectedEmployee);
    }
  }

  deleteEmploye(selectedEmployee: EmployeeDto) {
    this.employeeService.deleteEmployee(selectedEmployee.id).subscribe(
      response => {
        alert('Employee deleted successfully');
        console.log('Delete response:', response);
        this.deleteEmployeePopupVisible=false
        this.getAllEmployees();
      },
      error => {
        console.error(error);
      }
    );
  }
}
