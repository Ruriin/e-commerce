# ECommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## File Structure

.
└── ∇ app/
    ├── ∇ core/
    │   ├── ∇ guards/
    │   │   ├── auth.guard.ts
    │   │   ├── module-import.guard.ts
    │   │   └── no-auth.guard.ts
    │   ├── ∇ interceptor/
    │   │   ├── token.interceptor.ts
    │   │   └── error.interceptor.ts
    │   ├── ∇ services/
    │   │   ├── service-a.service.ts
    │   │   └── service-b.service.ts
    │   ├── ∇ components/
    │   │   ├── ∇ navbar/
    │   │   │   └── navbar.component.html|scss|ts
    │   │   └── ∇ page-not-found/
    │   │       └── page-not-found.component.html|scss|ts
    │   ├── ∇ constants/
    │   │   ├── constant-a.ts
    │   │   └── constant-b.ts
    │   ├── ∇ enums/
    │   │   ├── enum-a.ts
    │   │   └── enum-b.ts
    │   ├── ∇ models/
    │   │   ├── model-a.ts
    │   │   └── model-b.ts
    │   └── ∇ utils/
    │       └── common-functions.ts
    ├── ∇ features/
    │   └── ∇ feature-a/
    │       ├── ∇ components/
    │       │   ├── ∇ scoped-shared-component-a/
    │       │   │   └── scoped-shared-component-a.component.html|scss|ts
    │       │   └── ∇ scope-shared-component-b/
    │       │       └── scoped-shared-component-b.component.html|scss|ts
    │       ├── ∇ pages/
    │       │   ├── ∇ page-a/
    │       │   │   └── page-a.component.html|scss|ts
    │       │   └── ∇ page-b/
    │       │       └── page-b.component.html|scss|ts
    │       ├── ∇ models/
    │       │   ├── scoped-model-a.model.ts
    │       │   └── scoped-model-b.model.ts
    │       ├── ∇ services/
    │       │   ├── scoped-service-a.service.ts
    │       │   └── scoped-service-b.service.ts
    │       ├── feature-a-routing.module.ts
    │       ├── feature-a.module.ts
    │       └── feature-a.component.html|scss|ts
    ├── ∇ shared/
    │   ├── ∇ components/
    │   │   └── ∇ shared-button/
    │   │       └── shared-button.component.html|scss|ts
    │   ├── ∇ directives/
    │   │   └── shared-directive.ts
    │   ├── ∇ pipes/
    │   │   └── shared-pipe.ts
    │   └── shared.module.ts
    ├── styles.scss
    ├── ▽ styles/
    │   ├── app-loading.scss
    │   ├── company-colors.scss
    │   ├── spinners.scss
    │   └── variables.scss
    └── ▽ assets/
        ├── ▽ i18n/
        │   ├── lang-a.json
        │   └── lang-b.json
        ├── ▽ images/
        │   ├── image-a.svg
        │   └── image-b.svg
        ├── ▽ static/
        │   ├── structure-a.json
        │   └── structure-b.json
        └── ▽ icons/
            ├── custom-icon-a.svg
            └── custom-icon-b.svg


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
