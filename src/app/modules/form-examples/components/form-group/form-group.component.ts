import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Account } from '../../accoun-item.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  list: Account[] = [];
  acction: string = "Add";
  title: string = "Add Account";
  account: Account = new Account;
  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z$@$!%*?&].{6,}')]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {
    validators: this.comparePassword,
    asyncValidators: this.checkValidCity()
  }
  )
  constructor() { }

  ngOnInit(): void {
    this.createList();
  }

  createList() {
    this.list.push({
      name: "Dat Ne",
      email: "Datne@gmail.com",
      password: "Password@123"
    })
    this.list.push({
      name: "Dat 123",
      email: "Datne123@gmail.com",
      password: "Password@12345"
    })
  }

  onFormSubmit(): void {

  }

  resetForm(): void {
    this.employeeForm.reset();
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
  }

  add(): void {
    if (!this.account) {
      this.account = new Account();
      this.list.push(this.account);
      this.employeeForm.reset();
    }

    this.account.name = this.employeeForm.get('name').value;
    this.account.email = this.employeeForm.get('email').value;
    this.account.password = this.employeeForm.get('password').value;

    if (this.acction == "Add") {
      this.list.push(this.account);
      this.employeeForm.reset();
    }

  }

  setUpEdit(account: Account) {
    this.account = account;
    this.title = "Edit Account";
    this.acction = "Edit";
    this.employeeForm.get("name").setValue(account.name);
    this.employeeForm.get("email").setValue(account.email);
    this.employeeForm.get("password").setValue(account.password);
    this.employeeForm.get("confirmPassword").setValue(account.password);
  }

  reset(): void {
    this.employeeForm.reset();
    this.acction = "Add"
    this.title = "Add Account";
  }


  checkValidCity(): AsyncValidatorFn {
    return (): Observable<ValidationErrors> => {
      let check: boolean = true
      if (this.employeeForm.controls['name'].value == "admin") {
        check = false;
      }
      let err: ValidationErrors = { "nameNotAllow": true }
      return check ? of(null) : of(err);
    }
  }

}