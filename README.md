<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

Este repositorio contiene la prueba técnica desarrollada para aplicar a la convocatoria #18 de 2024 del IDEA

## Instalación

Primero, instalar las dependencias con el siguiente comando

```bash
$ npm install
```

## Configuración

Se deben configurar las variables de entorno creando un archivo .env con las siguientes variables (Se provee un archivo `.env.example` de muestra):

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_DATABASE_NAME=air_quality
```

Cabe aclarar que la base de datos debe estar poblada por el backup enviado para la prueba técnica.

## Ejecutar el proyecto
El proyecto se ejecutará en el puerto 3000 del localhost usando el siguiente comando
```bash
$ npm run start:dev
```

## Realizar peticiones
Usar el archivo `postman.json` provisto en los archivos del proyecto para realizar las peticiones HTTP desarrolladas:
1. `localhost:3000/extracted-data/one-record/station_sk/date/time` es una petición GET que obtendrá un registro para la estación dada en la fecha y hora especificada.
2. `localhost:3000/extracted-data/records-by-date-range/station_sk/initial_date/final_date` es una petición GET que obtendrá todos los registros para una estación entre los rangos de fecha dados.
3. `localhost:3000/extracted-data/add-record` es una petición POST que permite agregar un nuevo registro a la base de datos enviando un body en formato `json` con la siguiente estructura:
    ```json
    {
        "station_sk": "E2",
        "medition_date": "2024-06-19",
        "medition_time": "23:59:00",
        "pm2_5": 8.34,
        "pm10": 15.5,
        "temperature": 12.4,
        "humidity": 93.56,
        "barometric_pressure": 803.44
    }
    ```
