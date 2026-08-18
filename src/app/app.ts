import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { EventComp } from './components/event-comp/event-comp';
import { SignalComp } from './components/signal-comp/signal-comp';
import { Homepage } from './components/homepage/homepage';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { ApiComponents } from './components/api-components/api-components';
import { PostComp } from './components/post-comp/post-comp';
import { ResourceApi } from './components/resource-api/resource-api';
import { ProgressBar } from './components/progress-bar/progress-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventComp, SignalComp, RouterLinkWithHref,Homepage,ReactiveForm,ApiComponents,PostComp,ResourceApi,ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LearnAng');
}
