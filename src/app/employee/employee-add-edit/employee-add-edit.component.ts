import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SnackBarService } from 'src/app/core/snack-bar.service';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-employee-add-edit',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatDatepickerModule, MatRadioModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss'],
})
export class EmployeeAddEditComponent implements OnInit {
  picker: any
  employeeForm: FormGroup
  educations: string[] = [
    'A', 'B', 'C'
  ]
  constructor(private _fb: FormBuilder, private _employeeService: EmployeeService,
    private _dialog: MatDialogRef<EmployeeAddEditComponent>,
    private _snackBarService :SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employeeForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      birthday: null,
      gender: '',
      education: '',
      company: '',
      experience: null,
      package: null
    });
  }
  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.data) {
      if (this.employeeForm.valid) {
        this._employeeService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._dialog.close(true);
            this._snackBarService.openSnackBar('update employee success', 'done')
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    } else {
      if (this.employeeForm.valid) {
        this._employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._dialog.close(true);
            this._snackBarService.openSnackBar('add employee success', 'done')
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    }

  }
}
