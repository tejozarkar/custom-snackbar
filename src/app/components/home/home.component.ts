import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.snackbarService.show('This is test');
  } 




}
