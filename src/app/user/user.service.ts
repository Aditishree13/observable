import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UserService {
acitivatedEmitter = new Subject<boolean>();
}