> docker run -d ^
> More? -p 8081:8081 ^
> More? -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin ^
> More? -e ME_CONFIG_MONGODB_ADMINPASSWORD=pass ^
> More? --name mongo-express ^
> More? --net mongo-network ^
> More? -e ME_CONFIG_MONGODB_SERVER=mongodb ^
> More? mongo-express

docker run -d --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=pass -p 27017:27017 --net mongo-network mongo
