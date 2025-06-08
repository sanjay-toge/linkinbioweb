import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TemplateComponent } from './components/template/template.component';
import { MyStatsComponent } from './components/my-stats/my-stats.component';
import { AiToolComponent } from './components/ai-tool/ai-tool.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UpdateTemplateComponent } from './components/update-template/update-template.component';
import { PageComponent } from './components/page/page.component';
import { PageEditorComponent } from './components/page-editor/page-editor.component';

export const routes: Routes = [
    {
        path: '', // The URL path for the dashboard
        component: DashboardComponent, // The component to render
    },
    {
        path: 'template', // The URL path for the dashboard
        component: TemplateComponent, // The component to render
    },
    {
        path: 'my-stats', // The URL path for the dashboard
        component: MyStatsComponent, // The component to render
    },
    {
        path: 'ai-tools', // The URL path for the dashboard
        component: AiToolComponent, // The component to render
    },
    {
        path: 'settings', // The URL path for the dashboard
        component: SettingsComponent, // The component to render
    },
    {
        path: 'update-template', // The URL path for the dashboard
        component: UpdateTemplateComponent, // The component to render
    },
    {
        path: 'update-template/:id',
        component: UpdateTemplateComponent,
    },
    { path: 'pages', component: PageComponent },
    { path: 'page-editor/new', component: PageEditorComponent },
    { path: 'page-editor/:id', component: PageEditorComponent },
    {
        path: 'page', // Specific path for 404 errors
        component: PageComponent, // You can replace this with a dedicated 404 component if you have one
    },
    {
        path: '**', // Wildcard route for a 404 page
        redirectTo: '', // Redirect to the dashboard if no other route matches
    }
];
