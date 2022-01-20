package channel

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/sonr/testutil/sample"
	channelsimulation "github.com/sonr-io/sonr/x/channel/simulation"
	"github.com/sonr-io/sonr/x/channel/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = channelsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateChannel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateChannel int = 100

	opWeightMsgReadChannel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgReadChannel int = 100

	opWeightMsgDeleteChannel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteChannel int = 100

	opWeightMsgListenChannel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgListenChannel int = 100

	opWeightMsgUpdateChannel = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateChannel int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	channelGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&channelGenesis)
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

	var weightMsgCreateChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateChannel, &weightMsgCreateChannel, nil,
		func(_ *rand.Rand) {
			weightMsgCreateChannel = defaultWeightMsgCreateChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateChannel,
		channelsimulation.SimulateMsgCreateChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgReadChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgReadChannel, &weightMsgReadChannel, nil,
		func(_ *rand.Rand) {
			weightMsgReadChannel = defaultWeightMsgReadChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgReadChannel,
		channelsimulation.SimulateMsgReadChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteChannel, &weightMsgDeleteChannel, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteChannel = defaultWeightMsgDeleteChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteChannel,
		channelsimulation.SimulateMsgDeleteChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateChannel int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateChannel, &weightMsgUpdateChannel, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateChannel = defaultWeightMsgUpdateChannel
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateChannel,
		channelsimulation.SimulateMsgUpdateChannel(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
