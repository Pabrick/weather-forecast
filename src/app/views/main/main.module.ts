import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { WeatherInfoModule } from 'src/app/components/weather-info/weather-info.module';
import { WeekNavigationModule } from 'src/app/components/week-navigation/week-navigation.module';

@NgModule({
    declarations: [
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent
            }
        ]),
        WeatherInfoModule,
        WeekNavigationModule
    ],
    exports: [ MainComponent ]
})
export class MainModule { }