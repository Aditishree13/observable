import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Unsubscribable, Subscribable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponents implements OnInit, OnDestroy {
 
userActivated = false;
private activatedSub: Subscription;

  constructor(private userService: UserService) { }
  ngOnInit() {
  this.activatedSub = this.userService.acitivatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }
  
ngOnDestroy(): void {
this.activatedSub.unsubscribe();
}
  
}
