import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PaternDirective, multi: true }]
})
export class PaternDirective implements Validator {
  /**
   * Вхідна директива для отримання із шаблону значення призначенного атрибуту
   */
  @Input('appCustomValidator') inputSignature: string;
  constructor() { }
  /**
   * функція валідації що застосовується для реактивних форм - аналог валідатору "patern"
   * @param signature - регулятний вираз для перевірки відповідності()
   */
  baseValidator(signature: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value === '') {
        return null;
      }
      const permitted = signature.test(control.value);
      console.log('Custom validator works:', { signature, value: control.value, permitted });
      return permitted ? null : { customPaternError: { value: control.value } };
    };
  }

  /**
   * раалізація основного методу директиви валідації
   * @param control - зразок поля форми
   */
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.inputSignature ? this.baseValidator(new RegExp(this.inputSignature, 'i'))(control) : null;
  }

}
