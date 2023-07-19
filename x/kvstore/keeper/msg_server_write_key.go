package keeper

import (
	"context"

	"kvstore/x/kvstore/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) WriteKey(goCtx context.Context, msg *types.MsgWriteKey) (*types.MsgWriteKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	k.WriteKeyKeeper(ctx, msg.Key, msg.Value)
	_ = ctx

	return &types.MsgWriteKeyResponse{}, nil
}
