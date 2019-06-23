import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../products.model';

@Component({
  selector: 'app-supplement-detail',
  templateUrl: './supplement-detail.component.html',
  styleUrls: ['./supplement-detail.component.css']
})

export class SupplementDetailComponent implements OnInit {

  supplementId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.supplementId = parseInt(urlParameters['id']);
    });  
  }

}
