import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() userName?: string = '';
  @Input() isLoggedIn: boolean = false;
  @Input() isDisplayed: boolean = false;

  @Output() displayMessages = new EventEmitter<boolean>();
  @Output() hideMessages = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayMessages() {
    this.displayMessages.emit(true);
  }

  onHideMessages() {
    this.hideMessages.emit(true);
  }

  onLogout() {
    this.logout.emit();
  }

}
