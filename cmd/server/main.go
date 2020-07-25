package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"

	pb "github.com/TheRTK/example-grpc-with-envoy/api/proto"
	"github.com/TheRTK/example-grpc-with-envoy/internal/api"

	"google.golang.org/grpc"
)

func runGRPC()  {
	lis, err := net.Listen("tcp", ":8080")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Println("GRPC on :8080")

	grpcServer := grpc.NewServer()
	pb.RegisterMessageServiceServer(grpcServer, &api.MessageServer{})

	if err = grpcServer.Serve(lis); err != nil {
		log.Fatal(err)
	}
}

func waitSignal()  {
	sigs := make(chan os.Signal, 1)
	done := make(chan bool, 1)

	signal.Notify(sigs, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		sig := <-sigs
		fmt.Printf("Got %s", sig)
		done <- true
	}()

	<-done
	fmt.Println("Bye!")
}

func main()  {
	go runGRPC()

	waitSignal()
}
