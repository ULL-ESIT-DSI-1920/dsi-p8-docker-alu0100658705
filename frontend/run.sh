docker build -t pablo/nginx
docker run --rm --name fronttest -p 80:80 pablo/nginx