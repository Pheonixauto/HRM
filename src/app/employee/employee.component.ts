import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SnackBarService } from '../core/snack-bar.service';
import { EmployeeService } from '../service/employee/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatTableModule,
    MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _employeeService: EmployeeService, private _dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private _snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }


  openAddEmployee() {
    const dialogRef = this._dialog.open(EmployeeAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        this.getEmployeeList();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  openEditEmployee(data: any) {
    const dialogRef= this._dialog.open(EmployeeAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        this.getEmployeeList();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployeeList() {
    this._employeeService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  deleteEmployee(id: any) {
    this._employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        this.getEmployeeList();
        this._snackBarService.openSnackBar('delete employee success', 'done')
      },
      error: (err) => {
        console.log(err)
        this._snackBarService.openSnackBar(err, 'error')
      }
    })
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
