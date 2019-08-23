import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanTransformPipe } from './boolean-transform-pipes';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BooleanTransformPipe
    ]
})
export class BooleanTransformModule { }
