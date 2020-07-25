FROM golang:latest as builder
# setup the working directory
WORKDIR /go/src/app
ADD . .
# build the source
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main cmd/server/main.go

# use a minimal alpine image
FROM alpine:3.7
# add ca-certificates in case you need them
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
# set working directory
WORKDIR /app
# copy the binary from builder
COPY --from=builder /go/src/app/main .
# run the binary
CMD ["./main"]

EXPOSE 8080