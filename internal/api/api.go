package api

import (
	"context"

	pb "github.com/TheRTK/example-grpc-with-envoy/api/proto"
)

type MessageServer struct {}

func (s *MessageServer) GetMessage(ctx context.Context, in *pb.GetMessageRequest) (*pb.GetMessageResponse, error) {
	if in.GetQuery() == "" {
		return &pb.GetMessageResponse{Message: "Your request is empty!"}, nil
	}

	return &pb.GetMessageResponse{Message: "I got: " + in.GetQuery()}, nil
}