package bucket

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/sonr/testutil/sample"
	bucketsimulation "github.com/sonr-io/sonr/x/bucket/simulation"
	"github.com/sonr-io/sonr/x/bucket/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = bucketsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBucket = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBucket int = 100

	opWeightMsgReadBucket = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgReadBucket int = 100

	opWeightMsgUpdateBucket = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBucket int = 100

	opWeightMsgDeleteBucket = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBucket int = 100

	opWeightMsgListenBucket = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgListenBucket int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	bucketGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&bucketGenesis)
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

	var weightMsgCreateBucket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBucket, &weightMsgCreateBucket, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBucket = defaultWeightMsgCreateBucket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBucket,
		bucketsimulation.SimulateMsgCreateBucket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgReadBucket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgReadBucket, &weightMsgReadBucket, nil,
		func(_ *rand.Rand) {
			weightMsgReadBucket = defaultWeightMsgReadBucket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgReadBucket,
		bucketsimulation.SimulateMsgReadBucket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBucket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBucket, &weightMsgUpdateBucket, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBucket = defaultWeightMsgUpdateBucket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBucket,
		bucketsimulation.SimulateMsgUpdateBucket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBucket int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBucket, &weightMsgDeleteBucket, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBucket = defaultWeightMsgDeleteBucket
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBucket,
		bucketsimulation.SimulateMsgDeleteBucket(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
