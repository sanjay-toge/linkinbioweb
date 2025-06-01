import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', // The URL path for the dashboard
        component: DashboardComponent, // The component to render
    },];
