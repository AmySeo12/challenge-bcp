import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAgencies } from 'src/app/agencies/interfaces/agencies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() agency: IAgencies;
  @Output() updateAgency: EventEmitter<IAgencies> = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      agencia: ['', Validators.required],
      distrito: ['', Validators.required],
      provincia: ['', Validators.required],
      departamento: ['', Validators.required],
      direccion: ['', Validators.required],
      lat: ['', Validators.required],
      lon: ['', Validators.required],
      favorite: [false],
      id: [0],
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes.agency.currentValue ) {
      this.form.patchValue({
        agencia: this.agency.agencia || '',
        distrito: this.agency.distrito || '',
        provincia: this.agency.provincia || '',
        departamento: this.agency.departamento || '',
        direccion: this.agency.direccion || '',
        lat: this.agency.lat || '',
        lon: this.agency.lon || '',
        favorite: this.agency.favorite || false,
        id: this.agency.id || 0,
      });
    }
  }

  update() {
    const valueForm = this.form.value as IAgencies;
    this.updateAgency.emit(valueForm);
  }

  isFieldValid(field: string) {
    return this.form.get(field).invalid;
  }

}
