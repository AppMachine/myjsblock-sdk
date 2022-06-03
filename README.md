# @myjsblock/sdk

A javascript package to add custom functionality inside AppMachine applications. This enables you to create you own UI by retrieving data, change data and also control the app.

## Documentation

The full documentation of this library can be found on [AppMachine Docs](https://docs.appmachine.com/libraries/javascript/sdk).

## Installation

The CLI can be globally installed on your machine, makes it easy using it across projects.

### NPM

```sh
npm install @myjsblock/cli
```

### YARN

```sh
yarn add @myjsblock/cli
```

## Functions

To able to manage the app with your custom javascript you use the  `@myjsblock/sdk` package. This package exposes asynchronous functions to call from you application. These functions provides a simplified api to comunicate with the application shell.

All the functions of `@myjsblock/sdk` are categorized in the following categories:
- Core
- Data
- Navigation
- Notification
- Media
- User

### Core

Core functions are the basic interactive functions like `showLoader` and `hideLoader` but also has some function to request data and set from "block level".

See all [Core functions](https://docs.appmachine.com/libraries/javascript/sdk/api/core)

### Data

Data includes all functions for retrieving data from block data context. This does not include functions to change data.

See all [Data functions](https://docs.appmachine.com/libraries/javascript/sdk/api/data)

### Navigation

Navigation includes functions to navigate in the app. For example navigate to other block or go back.

See all [Navigation functions](https://docs.appmachine.com/libraries/javascript/sdk/api/navigation)

### Notification

Notification includes functions to create native interactive modals, dialogs and alerts to the user.

See all [Notification functions](https://docs.appmachine.com/libraries/javascript/sdk/api/notification)

### Media

Media includes functions to access device media, like picking images and taking pictures with the device camera.

See all [Media functions](https://docs.appmachine.com/libraries/javascript/sdk/api/media)

### User

User includes function to access user information, like if someone is authenticated or what the users data is.

See all [User functions](https://docs.appmachine.com/libraries/javascript/sdk/api/user)

## Issues & Bugs

For issues, bugs and question please open an issue in the [issue tab](https://github.com/AppMachine/myjsblock-sdk/issues).
