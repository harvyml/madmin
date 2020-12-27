# Madmin

Madmin es una app que simula un admin panel.
La construí de tal forma que el cliente escrito en React consultara una api que cree en node, el servidor se encarga de procesar solo los datos necesarios y los deja en un endpoint para que luego el cliente pueda consultarlos.

## Features
- Sesión de usuarios
- Creador de TODOs
- Lista usuraios traidos de mocki.io (fake API)

## Escalabilidad
Integré MongoDB pensando en que se necesitan mas datos por pantalla que relaciones entre ellos que necesiten esar demasiado organizadas, así que el performance mejora cuando se trata de cantidades de datos grandes.

****

## Stack
Use el stack MERN para construirla (Mongo, Express, React y Node)


## Correrlo de manera local
- hacer ```npm install```
- crear un archivo .env y crear las variables de entorno ```DB``` con la dirección a una base de datos de mongo y ```SECRET_WORD_FOR_SESSION_HANDLING``` con cualquier valor

Gracias!