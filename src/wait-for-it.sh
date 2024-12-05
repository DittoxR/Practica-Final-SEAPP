#!/bin/bash

# Espera hasta que el servicio MySQL esté listo
host="$1"
shift
port="$1"
shift
cmd="$@"

until nc -z "$host" "$port"; do
  echo "Esperando a MySQL en $host:$port..."
  sleep 1
done

echo "MySQL está disponible en $host:$port. Ejecutando el comando..."
exec $cmd
