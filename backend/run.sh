docker build -t pablo/app_node .
docker run --rm --name backtest -p 8081:8081 -d pablo/app_node