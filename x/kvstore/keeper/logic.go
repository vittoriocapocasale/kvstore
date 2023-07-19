package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) WriteKeyKeeper(ctx sdk.Context, key string, value string) {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
	ctx.KVStore(k.storeKey).Set([]byte(key), []byte(value))

	// Convert the count into a uint64
}

func (k Keeper) DeleteKeyKeeper(ctx sdk.Context, key string) {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
	ctx.KVStore(k.storeKey).Delete([]byte(key))
}

func (k Keeper) ReadKeyKeeper(ctx sdk.Context, key string) string {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
	v := string(ctx.KVStore(k.storeKey).Get([]byte(key)))

	// Convert the count into a uint64
	return v
}
