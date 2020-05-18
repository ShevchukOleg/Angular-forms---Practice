import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { UserData } from '../../interfaces/rfInterfaces';
import { passwordMatchValidator } from '../../helpers/pasvordMatchValidator';
import { SpesialErrorStateMatcher } from '../../helpers/errorStateMatcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rf-examples',
  templateUrl: './rf-examples.component.html',
  styleUrls: ['./rf-examples.component.css']
})
export class RfExamplesComponent implements OnInit, OnDestroy {
  private subscriptions$ = new Subject<void>();
  public loginForm: FormGroup;
  public resetPasswordForm: FormGroup;
  public enigmaForm: FormGroup;
  public dinamicForm: FormGroup;
  public accForm: FormGroup;
  public matcher = new SpesialErrorStateMatcher();

  public encription = {
    paterns: [8, 16],
    curentpatern: 8,
    encryptedResult: ''
  };

  public states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], []),
      password: new FormControl('', [Validators.required])
    });

    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      passwordCheck: ['', [Validators.required]]
    }, {
      validator: passwordMatchValidator('password', 'passwordCheck')
    });

    this.enigmaForm = new FormGroup({
      baseText: new FormControl('', Validators.required, [])
    });

    this.dinamicForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });

    /**
     * *example of streaming data from a formControl
     * !! The form value should be carefully monitored. Since the data change event is triggered earlier by the assignment of the form state, then an estimate of the state of the form in the subscription will give us a preliminary value.
     * * For streaming changes without triggering a value change event, the following applies: setValue(newValue, { emitEvent: false });
     */
    this.enigmaForm.get('baseText').valueChanges.pipe(
      takeUntil(this.subscriptions$)
    )
      .subscribe((data) => {
        console.log(data);
        console.log(this.enigmaForm.get('baseText').value, this.enigmaForm.value);
        const newValue = this.enigmaForm.get('baseText').value + ' ';
        this.enigmaForm.get('baseText').setValue(newValue, { emitEvent: false });
      }
      );
    /**
     * example of streaming data from a formGroup
     */
    this.enigmaForm.valueChanges.pipe(
      takeUntil(this.subscriptions$)
    )
      .subscribe((data) => {
        console.log(data);
        // const newValue = this.enigmaForm.get('baseText').value + ' ';
        // this.enigmaForm.get('baseText').setValue(newValue, { onlySelf: true });
      }
      );

    this.accForm = new FormGroup({
      state: new FormControl(this.states[3]),
      state2: new FormControl(this.states[3]),
    });
  }

  onLogin1() {
    console.log(this.loginForm.status, this.loginForm.controls);
    const newUser = new UserData(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  onLogin2() {
    console.log(this.resetPasswordForm.status, this.resetPasswordForm.controls);
  }

  addModifictionToForm(target: number = 1, fild: string = 'email', value: string = 'new@text.com') {
    let targetForm: FormGroup;
    switch (target) {
      case 1: targetForm = this.loginForm;
        break;
      case 2: targetForm = this.resetPasswordForm;
        break;
      default:
        try {
          const valid = (target > 0 && target < 3);
          if (!valid) {
            throw new Error('Inaccessible form selected');
          }
        } catch (error) {
          console.error('Forms error:' + error.message);
        }
    }
    this.loginForm.controls[fild].setValue(value);
  }

  addControls() {
    this.aliases.push(this.formBuilder.control(''));
  }


  get form1() { return this.loginForm.controls; }
  get form2() { return this.resetPasswordForm.controls; }
  get aliases() { return this.dinamicForm.get('aliases') as FormArray; }

  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }
}
