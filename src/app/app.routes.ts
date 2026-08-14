import { Routes } from '@angular/router';
import { EventComp } from './components/event-comp/event-comp';
import { SignalComp } from './components/signal-comp/signal-comp';

export const routes: Routes = [
    // {
    //  path:'',
    //  redirectTo:'SignalComp'
    // },
    {
        path:'eventComp',
        component:EventComp
    },
    {
        path:'signalComp',
        component:SignalComp
    }
];
