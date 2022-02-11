import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Vol} from "../../models/vol";
import {VolService} from "../../services/vol.service";
import {first} from "rxjs";

@Component({
  selector: 'app-list-vol',
  templateUrl: './list-vol.component.html',
  styleUrls: ['./list-vol.component.scss']
})
export class ListVolComponent implements OnInit {


  volForm: FormGroup = new FormGroup({

    countryArrival: new FormControl(''),
    countryDeparture: new FormControl(''),
  });

  vols: Vol[] = [];
  submitted = false;

  constructor(
    private _volService: VolService,
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {

    this.buildVolForm();
  }

  buildVolForm(): void {

    this.volForm = this._formBuilder.group({

      countryArrival: ['', [Validators.required]],
      countryDeparture: ['', [Validators.required]],
    });
  }

  onSubmit() {

    this.submitted = true;

    if (this.volForm.invalid) {

      return;
    }

    this._volService.findAllVolByArrivalAndDeparture(this.volForm.value.countryArrival, this.volForm.value.countryDeparture)
      .pipe(first())
      .subscribe({
        next: (vols) => {

          console.log(vols);
          this.vols = vols;
          this.submitted = false;
          this._changeDetectorRef.detectChanges();
        },
        error: error => {

          this.submitted = false;
          this._changeDetectorRef.detectChanges();
          console.error(error);
        }
      });
  }

  get f() {

    return this.volForm.controls;
  }

}
