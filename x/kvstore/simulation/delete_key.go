package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"kvstore/x/kvstore/keeper"
	"kvstore/x/kvstore/types"
)

func SimulateMsgDeleteKey(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgDeleteKey{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the DeleteKey simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "DeleteKey simulation not implemented"), nil, nil
	}
}
