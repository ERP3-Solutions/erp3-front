import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export function validateForm(control: AbstractControl): boolean {
  markControl(control);
  control.updateValueAndValidity({ onlySelf: false, emitEvent: false });
  return control.valid;
}

export function markControl(control: AbstractControl): void {
  if (control instanceof FormControl) {
    control.markAsTouched({ onlySelf: true });
    control.markAsDirty({ onlySelf: true });
    control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach(childControl => {
      markControl(childControl);
    });
  }

  if (control instanceof FormArray) {
    control.controls.forEach(childControl => {
      markControl(childControl);
    });
  }
}