<img height=160 src="https://sdk.dfinity.org/_/img/logo.svg" />

# DAngular

## Backend project

The backend project was generated with the [DFINITY Canister SDK](https://sdk.dfinity.org/docs/introduction/welcome.html)

```
DFX_VERSION=0.8.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

### Development server

Run `dfx start --background` for a dev server. Navigate to `http://localhost:8000/`. To stop the dev server `dfx stop`.

## Frontend project

The frontend project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

```
ng install -g @angular/cli
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Start development
```
git clone https://github.com/shawnrmoss/dangular.git

cd dangular

npm install

dfx start --background

dfx deploy

npm run start
```
