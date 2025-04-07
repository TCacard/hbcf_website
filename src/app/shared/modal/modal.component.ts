import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  @Input() field: any;
  fieldControl = new FormControl('');

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

  isFieldFilled(fieldName: string): boolean {
    const field = this.formGroup.get(fieldName);
    return field?.value && field.value.trim() !== '';
  }
  

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedFile = file;
  //     console.log('Image sélectionnée :', file.name);
  //   }
  // }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  
  // Gestion du Drag & Drop
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.add("dragover");
  }
  
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove("dragover");
  }
  
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove("dragover");
  
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }




  closeModal(): void {
    this.dialogRef.close();
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
