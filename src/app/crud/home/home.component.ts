import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  product_id: number;
  // products: <Product[]>;

  constructor(public crudService: CrudService) { }

  delete(product_id) {
    this.crudService.delete(product_id)
    .subscribe(() => {
      let i = this.products.findIndex(x => x.id === product_id);
      this.products.splice(i, 1);
    })
  }

  ngOnInit() {
    this.crudService.getAll().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    })
  }

}
