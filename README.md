## dsi-p8-docker-alu0100658705

## Pablo Bethencourt Díaz

## alu0100658705@ull.edu.es

### 1. Instalación de Docker

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

        Añadimos la "GPG key" oficial de Docker: "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"

        Añadimos el repositorio: "sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) \stable" "

    c. Instalación de paquetes de Docker:

       Instalamos los siguientes paquetes:

       - docker-ce
       - docker-ce-cli
       - containerd.io

       Damos permisos para ejecutar Docker al usuario actual: "sudo usermod -aG docker $USER"


       Comprobamos que se ha instalado correctamente:

![cap00](images/cap00.png)
