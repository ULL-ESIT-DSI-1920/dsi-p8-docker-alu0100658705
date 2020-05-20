## dsi-p8-docker-alu0100658705

## Pablo Bethencourt Díaz

## alu0100658705@ull.edu.es

### Instalación de Docker

| Información del sistema: |                        |
| ------------------------ | ---------------------- |
| Sistema Operativo        | Ubuntu 18.04.4 LTS     |
| Kernel                   | Linux 5.3.0-51-generic |
| Arquitectura             | x86-64                 |

    a. Pasos previos:

        Desisntalar los siguientes paquetes en caso de estar previamente instalados:

        - docker
        - docker-engine
        - docker.io
        - containerd
        - runc

        Actualizar los repositorios del sistema.

    b. Instalación de dependencias para Docker:

        Instalar los siguientes paquetes:

        - apt-transport-https
        - ca-certificates
        - curl
        - gnupg2
        - software-properties-common

        Añadimos la "GPG key" oficial de Docker:
        "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"

        Añadimos el repositorio: "sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) \stable" "

    c. Instalación de paquetes de Docker:

       Instalamos los siguientes paquetes:

       - docker-ce
       - docker-ce-cli
       - containerd.io

       Damos permisos para ejecutar Docker al usuario actual: "sudo usermod -aG docker $USER"

Trás realizar todos los pasos anteriores, comprobamos que se ha instalado correctamente:

![cap00](images/cap00.png)

### Desarrollo de la práctica

#### 1) Configuración del backend: Aplicación Node

Iniciamos un proyecto Node.js con <code> _npm init_ </code> y realizamos la instalación de _express_ mediante <code> _npm install express_ </code>.

Definimos una aplicación en el fichero _server.js_, donde mediante el uso de _express_ se realiza direccionamiento a diferentes peticiones:

![cap01](images/cap01.png)

Las peticiones son las siguientes:

1. Petición <code> / </code>, que devuelve la versión de app:

![cap02](images/cap02.png)

2. Petición <code> /api </code>, devuelve un JSON con la información del fichero _data.json_:

![cap03](images/cap03.png)

#### 2) Dockerizar la aplicación Node:

1. Definimos el fichero _Dockerfile_:

![cap04](images/cap04.png)

Para optimizar la imagen utilizamos la versión slim de node y definimos un fichero _.dockerignore_:

![cap05](images/cap05.png)

2. Generamos la imagen con el comando <code> docker build -t pablo/app_node . </code>

![cap06](images/cap06.png)

3. Creamos el contenedor y realizamos las comprobaciones para verificar su correcto funcionamiento:

Ejecutamos el comando <code> docker run --rm --name backtest -p 8081:8081 -d pablo/app_node </code> con la opción -d para ejecutarlo en segundo plano.

Realizamos las siguientes comprobaciones:

- Utilizamos _docker ps_ para obtener comprobar que en que estado se encuentra la imagen:

![cp07](images/cap07.png)

- Ejecutamos curl y obtenemos la siguiente salida:

![cp08](images/cap08.png)

- Para agilizar el proceso, podemos añadir los anteriores comandos a un fichero _run.js_

Una vez realizadas todas las configuraciones, la estrcutura que deberíamos tener es la siguiente:

![cp09](images/cap09.png)

#### 3) Creación del frontend

#### 6) Docker Compose

1. **Instalación de Docker Compose**

Ejecutamos los siguientes comandos:

- <code> sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose </code>

- <code> sudo chmod +x /usr/local/bin/docker-compose </code>

Comprobamos que la instalación se he realizado correctamente:

![cp10](images/cap10.png)
