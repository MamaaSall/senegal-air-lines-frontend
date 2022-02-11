import {Component, OnInit} from '@angular/core';
import {VolService} from "../../services/vol.service";
import {ActivatedRoute} from "@angular/router";
import {Vol} from "../../models/vol";
import {first} from "rxjs";

@Component({
  selector: 'app-fiche-vol',
  templateUrl: './fiche-vol.component.html',
  styleUrls: ['./fiche-vol.component.scss']
})
export class FicheVolComponent implements OnInit {

  vol: Vol = new Vol();

  constructor(
    private _volService: VolService,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this._route.paramMap.subscribe(params => {

      let id = params.get('id');
      this._volService.findVolByNumber(id)
        .pipe(first())
        .subscribe({
          next: vol => {

            this.vol = vol;
          },
          error: err => {

            console.error(err);
          }
        });
    });

  }

}
