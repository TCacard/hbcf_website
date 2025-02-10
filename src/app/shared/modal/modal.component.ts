import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  formGroup!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const group: any = {};
    this.data.fields.forEach((field: any) => {
      const validators = field.required ? [Validators.required] : [];
      group[field.name] = ['', validators];
    });
    this.formGroup = this.fb.group(group);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Image sélectionnée :', file.name);
    }
  }

  submitForm(): void {
    if (this.formGroup.valid) {
      const formData = {
        ...this.formGroup.value,
        picture: this.selectedFile,
      };
      console.log('Formulaire soumis avec :', formData);
      this.dialogRef.close(formData);
    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
