import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  constructor(private modalService: NgbModal) {}


openModal(): void {
    const modalRef = this.modalService.open(ModalContentComponent, { size: 'lg', backdrop: 'static' });

  }

  ngOnInit(): void {
  }

}
