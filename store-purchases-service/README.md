# store-purchases-service

This microservice uses a in-memory storage so that the integration between mfe-microservices works out-of-the-box. If you prefer using a different storage, just add the provider such as sql or mongodb/no-sql (recomended, configuration should be faster, since the service is prepared to be used with a no-sql storage).<br>
Docker-compose file might need to be changed if a database provider is added.
