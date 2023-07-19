package keeper

import (
	"kvstore/x/kvstore/types"
)

var _ types.QueryServer = Keeper{}
