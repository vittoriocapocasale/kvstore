package keeper

import (
	"context"

	"kvstore/x/kvstore/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) DeleteKey(goCtx context.Context, msg *types.MsgDeleteKey) (*types.MsgDeleteKeyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	k.DeleteKeyKeeper(ctx, msg.Key)
	_ = ctx

	return &types.MsgDeleteKeyResponse{}, nil
}
