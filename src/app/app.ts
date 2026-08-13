import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComp } from './components/event-comp/event-comp';
import { SignalComp } from './components/signal-comp/signal-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EventComp,SignalComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LearnAng');
}
