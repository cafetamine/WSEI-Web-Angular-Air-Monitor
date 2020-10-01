# WSEI-Web-Angular-Air-Monitor

[![build status](https://github.com/cafetamine/WSEI-Web-Angular-Air-Monitor/workflows/Build/badge.svg)](https://github.com/cafetamine/WSEI-Web-Angular-Air-Monitor/actions)

## Table of Contents

- [WSEI-Web-Angular-Air-Monitor](#wsei-web-angular-air-monitor)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Technological Stack](#technological-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
      - [Airly API key](#airly-api-key)
      - [Angular](#angular)
      - [Configuration](#configuration)
      - [Compile](#compile)
  - [Glossary](#glossary)
    - [Airly](#airly)
  - [Airly API Integration](#airly-api-integration)
    - [**`GET`** **Nearest Installations**](#get-nearest-installations)
      - [Params](#params)
      - [Sample Curl](#sample-curl)
    - [**`GET`** **Measurements for Installation**](#get-measurements-for-installation)
      - [Params](#params-1)
      - [Sample Curl](#sample-curl-1)
  - [Sample application usages](#sample-application-usages)
    - [User checks information about air quality around his whereabouts](#user-checks-information-about-air-quality-around-his-whereabouts)

## About The Project

Project was created at university [Wyższa Szkoła Ekonomii i Informatyki w Krakowie](https://wsei.edu.pl/) as a final term grade for subject `Programowanie aplikacji webowych` (Programming web applications).

Application is a web page allowing to share information about air quality and standards in Poland. Data will by fetched from online API of [Airly](https://airly.eu/en/).

## Technological Stack

Fallowing list includes main technologies used in project with link to their documentation.

- [TypeScript](https://www.typescriptlang.org/docs),
- [Angular](https://angular.io/docs),
- [rxjs](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html),
- [CSS](https://devdocs.io/css/).

Planned for future:

- [Firebase](https://firebase.google.com/docs)

## Getting Started

Detailed description of steps needed to compile and run application.

### Prerequisites

#### Airly API key

Airly API shares developer program that allows to test their API.  
Fallowing requires to create a developer account and obtain `API key` by [registration](https://developer.airly.eu/register).

#### Angular

Application uses Angular as base framework, fallowing requires you to have angular installed locally.  
Assuming usage of `node` fallowing terminal command will install latest angular version:

```bash
npm install -g @angular/cli
```

#### Configuration

`TODO`

#### Compile

Fallowing bash command will compile and run application locally:

`TODO` profiles?

```bash
ng serve
```

## Glossary

### Airly

- `Installation` - technical kit used to measure air standard and quality.
- `Measurement` - complex information about air quality and standard value.

## Airly API Integration

Data about air quality and standards will be fetched from online api of [Airly](https://developer.airly.eu/api).

Fallowing endopints will be used in application:

### **`GET`** **Nearest Installations**

Provided with user location finds closest installations

#### Params

- `lat` (latitude) - users current latitude,
- `lng` (longitude) - users current longitude,
- `maxResults` - limits list of returned installations in case there are multiple around given (latitude, longitude).

#### Sample Curl

```bash
curl -X GET
--header 'Accept: application/json'
--header 'Accept-Language: en'
--header 'apikey: XXX'
'https://airapi.airly.eu/v2/installations/nearest?lat=50.062006&lng=19.940984&maxDistanceKM=3&maxResults=1'

```

### **`GET`** **Measurements for Installation**

Given id of installation returns data about air quality and standards measured at this installation.

#### Params

- `indexType` - filters data to requested type of measurements only,
- `includeWind` - if set to true measurements will include information about wind,
- `installationId` - id of installation of which measurements should be returned.

#### Sample Curl

```bash
curl -X GET
--header 'Accept: application/json'
--header 'Accept-Language: en'
--header 'apikey: XXX'
'https://airapi.airly.eu/v2/measurements/installation?indexType=AIRLY_CAQI&installationId=204'

```

## Sample application usages

### User checks information about air quality around his whereabouts

1. **User** will open main page.  
   `TODO` insert main page screen`
2. **User** will agree to share his location.
3. **Application** will fetch installation data from `Airly`.
4. **Application** will display list of installations nearby user.  
   `TODO` insert main page screen`
5. **Application** will fetch information about air measurements form `Airly.
6. **Application** will mark installations with:
   - good air quality as `green`,
   - bad air quality as `red`.

    `TODO` insert main page screen`
7. **User** will expand information about installation of intrest.
8. **Application** will display detailed information about air quality.  
    `TODO` insert main page screen`
