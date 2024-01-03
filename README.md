<div align="center" style="width:500px; margin: 0 auto">

![1_1HXCJCOpzKdmQI33ZrEIlg](https://github.com/JoseMMorales/Movies-App-Ionic/assets/43299285/e5283ba4-1097-41b7-9b97-f55ffc896b2b)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

</div>

## Using NgRx Modules with Standalone Angular App

Same as the root RouterModule, NgRx modules are configured at the application level using appCofig file which is going to be part of the bootstrapApplication function to render a standalone component as the application's root component.

<div align="center">

<img width="400" alt="Capture" src="https://github.com/JoseMMorales/Movies-App-Ionic/assets/43299285/c32c4118-e7d5-4afb-bf57-2b84a5019038">

</div>

## Data Resolver function

It is used with the router to resolve data during navigation. In our implementation with NgRx it will dispatch all data to populate the Store while the router waits for the data to be resolved before the route is finally activated.

<div align="center">

<img width="405" alt="Capture" src="https://github.com/JoseMMorales/Movies-App-Ionic/assets/43299285/3eb5f381-3ec7-43ce-b3af-d4c6b8215c63">

</div>

<b>Configuring Angular router with resolver:</b>

<div align="center">

<img width="401" alt="Capture" src="https://github.com/JoseMMorales/Movies-App-Ionic/assets/43299285/32c24fcf-2350-4ed6-b2ca-d8e5f0db2300">

</div>

## Built-in Control Flow

@defer view and @if/@for blocks have been tested on this project in a reactive way for as to render data from the API, in both scenarios there have been applied some conditions in order to set the data avoiding use ng-containers or ng-if directives to hide content dynamically.

Please follow links below to have a look:

- `https://angular.dev/guide/templates/control-flow`
- `https://angular.dev/guide/defer`

## Download

- `$git clone https://github.com/JoseMMorales/Angular-17SSR.git`
- `$cd angular17SSR`
- `npm install`
- `npm start`

## Technology

<b>@angular/cli:</b> "^17.0.7",<br>
<b>@ngrx/effects:</b> "^17.0.1",<br>
<b>@ngrx/store:</b> "^17.0.1",<br>
<b>rxjs:</b> "~7.8.0",<br>
<b>typescript:</b> "~5.2.2"<br>
<b>prettier:</b> "3.1" => Format new Angular 17 syntax on template [Download here](https://www.npmjs.com/package/prettier)

## Author

JOSEMMORALES
