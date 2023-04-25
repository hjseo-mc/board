import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
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
    this.editorForm = this.fb.group({
      title: [""],
      content: [""]
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
      subject: controls.subject.value.trim(),
      content: controls.content.value.trim()
    });
    const value = this.editorForm.value;
    console.log(value)

  }
}
