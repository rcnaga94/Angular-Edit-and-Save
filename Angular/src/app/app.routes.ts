import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router,RouterModule,Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes= [
    {
        path:'',
        component:HomeComponent
    },
   
];

export const routing= RouterModule.forRoot(routes);