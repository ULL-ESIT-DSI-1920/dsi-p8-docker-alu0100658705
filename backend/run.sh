docker build -t pablo/app_node .
docker run --rm --name backtest -p 8081:8081 pablo/app_node