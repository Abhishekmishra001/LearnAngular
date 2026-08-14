import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { EventComp } from './components/event-comp/event-comp';
import { SignalComp } from './components/signal-comp/signal-comp';
import { Homepage } from './components/homepage/homepage';
import { ReactiveForm } from './components/reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventComp, SignalComp, RouterLinkWithHref,Homepage,ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LearnAng');
}
