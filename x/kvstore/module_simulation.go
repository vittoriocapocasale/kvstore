package kvstore

import (
	"math/rand"

	"kvstore/testutil/sample"
	kvstoresimulation "kvstore/x/kvstore/simulation"
	"kvstore/x/kvstore/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = kvstoresimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgWriteKey = "op_weight_msg_write_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgWriteKey int = 100

	opWeightMsgDeleteKey = "op_weight_msg_delete_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteKey int = 100

	opWeightMsgReadKey = "op_weight_msg_read_key"
	// TODO: Determine the simulation weight value
	defaultWeightMsgReadKey int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	kvstoreGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&kvstoreGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgWriteKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgWriteKey, &weightMsgWriteKey, nil,
		func(_ *rand.Rand) {
			weightMsgWriteKey = defaultWeightMsgWriteKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgWriteKey,
		kvstoresimulation.SimulateMsgWriteKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteKey, &weightMsgDeleteKey, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteKey = defaultWeightMsgDeleteKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteKey,
		kvstoresimulation.SimulateMsgDeleteKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgReadKey int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgReadKey, &weightMsgReadKey, nil,
		func(_ *rand.Rand) {
			weightMsgReadKey = defaultWeightMsgReadKey
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgReadKey,
		kvstoresimulation.SimulateMsgReadKey(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
