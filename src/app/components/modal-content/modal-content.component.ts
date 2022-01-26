import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal,   } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal, private toaster: ToastrService) {}

  close(): void{

    this.activeModal.close('Close click');
  }

  ngOnInit(): void {
  }

toast(): void{
  this.toaster.success(`Your appointment is registered`);
  this.activeModal.close('Close click');



}

}
