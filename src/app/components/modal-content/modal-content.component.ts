import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal,   } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  close(): void{

    this.activeModal.close('Close click');
  }

  ngOnInit(): void {
  }

}
