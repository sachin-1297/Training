import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name = 'sachin';
  addCaseFieldForm = new FormGroup({
    name: new FormControl('')
  });

  @HostListener("window:beforeunload")
  canDeactivate(): Observable<boolean> | boolean {
    return (
      !this.addCaseFieldForm.dirty
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
