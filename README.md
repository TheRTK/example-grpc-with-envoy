#example-grpc-with-envoy

## Requirement
docker with docker-compose 

## Start
```
git clone git@github.com:TheRTK/example-grpc-with-envoy.git
docker-compose -f build/docker-compose.yml up -d
```

## Ports:
 - `3000` - Simple frontend
 - `8080` - GRPC-native endpoint
 - `8081` - Envoy proxy (GRPC-web endpoint)
 - `9901` - Envoy Admin
 