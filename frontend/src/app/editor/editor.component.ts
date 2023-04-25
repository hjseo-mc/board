import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm!: FormGroup;
  constructor(protected fb: FormBuilder) { }

  ngOnInit(): void {

    //https://angular.io/api/forms/Validators (참고)
    this.editorForm = this.fb.group({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required])
    });

    this.editorForm.valueChanges.pipe(
      map((value) => {
        return value;
      })
    ).subscribe();
  }

  save(){
    const controls = this.editorForm.controls;

    this.editorForm.setValue({
      title: controls.title.value.trim(),
      content: controls.content.value.trim()
    });
    const value = this.editorForm.value;
    console.log(value)

  }
}
