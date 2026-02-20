import { Routes } from '@angular/router';
import { UpcomingEvents } from './upcoming-events/upcoming-events';
import { Contact } from './contact/contact';
import { Faq } from './faq/faq';
import { Wildcard } from './wildcard/wildcard';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App,
    },
    {
        path: 'upcoming-events',
        component: UpcomingEvents
    },
    {
        path: 'about',
        component: UpcomingEvents
    }, 
        {
        path: 'contact',
        component: Contact
    },
    {
        path: 'faq',
        component: Faq,
    },
    // Keep this the last path in the list
    // So Angular defaults to it as the wildcard/404 page
    {
        path: '**',
        component: Wildcard,
    }
];
