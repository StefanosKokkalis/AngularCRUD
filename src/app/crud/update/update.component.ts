import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Product } from '../product';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product_id: string;
  product:Product;
  activatedRoute: ActivatedRoute; 
  productForm: FormGroup;

  constructor(
    public crudService: CrudService,
    activatedRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
    ) {
    this.activatedRoute = activatedRoute;
  }

  submitForm() {
    this.crudService.update(this.product_id ,this.productForm.value).subscribe(res => {
      console.log('Product updated!')
      this.router.navigateByUrl('')
    })
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: ['']
    })
    this.activatedRoute.paramMap.subscribe(params => {
      this.product_id = params.get('productId');
      return this.crudService.getByID(this.product_id)
      .subscribe(res => {
        this.product = res;
        console.log(res)
        this.productForm = this.fb.group({
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
          quantity: this.product.quantity
        })
      })
    })
  }


  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }

}
