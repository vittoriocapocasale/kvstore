package keeper

import (
	"context"

	"kvstore/x/kvstore/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ReadKey(goCtx context.Context, msg *types.MsgReadKey) (*types.MsgReadKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	v := k.ReadKeyKeeper(ctx, msg.Key)
	_ = ctx

	return &types.MsgReadKeyResponse{Value: v}, nil
}
