package keeper

import (
	"context"

	"kvstore/x/kvstore/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetValue(goCtx context.Context, req *types.QueryGetValueRequest) (*types.QueryGetValueResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	v := k.ReadKeyKeeper(ctx, req.Key)
	_ = ctx

	return &types.QueryGetValueResponse{Value: v}, nil
}
