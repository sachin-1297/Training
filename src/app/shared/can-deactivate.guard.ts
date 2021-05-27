import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutComponent } from '../feature/about/about.component';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AboutComponent> {

    constructor() { }

    canDeactivate(
        component: AboutComponent
    ): boolean | Observable<boolean> {

        return component.addCaseFieldForm.dirty
            ? confirm('Are you sure you want to discard your changes?')
            : true;
    }
}
