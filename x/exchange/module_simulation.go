package exchange

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/sonr/testutil/sample"
	exchangesimulation "github.com/sonr-io/sonr/x/exchange/simulation"
	"github.com/sonr-io/sonr/x/exchange/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = exchangesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateExchange = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateExchange int = 100

	opWeightMsgReadExchange = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgReadExchange int = 100

	opWeightMsgUpdateExchange = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateExchange int = 100

	opWeightMsgDeleteExchange = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteExchange int = 100

	opWeightMsgCreateRecords = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRecords int = 100

	opWeightMsgUpdateRecords = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRecords int = 100

	opWeightMsgDeleteRecords = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRecords int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	exchangeGenesis := types.GenesisState{
		RecordsList: []types.Records{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&exchangeGenesis)
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

	var weightMsgCreateExchange int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateExchange, &weightMsgCreateExchange, nil,
		func(_ *rand.Rand) {
			weightMsgCreateExchange = defaultWeightMsgCreateExchange
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateExchange,
		exchangesimulation.SimulateMsgCreateExchange(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgReadExchange int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgReadExchange, &weightMsgReadExchange, nil,
		func(_ *rand.Rand) {
			weightMsgReadExchange = defaultWeightMsgReadExchange
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgReadExchange,
		exchangesimulation.SimulateMsgReadExchange(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateExchange int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateExchange, &weightMsgUpdateExchange, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateExchange = defaultWeightMsgUpdateExchange
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateExchange,
		exchangesimulation.SimulateMsgUpdateExchange(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteExchange int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteExchange, &weightMsgDeleteExchange, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteExchange = defaultWeightMsgDeleteExchange
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteExchange,
		exchangesimulation.SimulateMsgDeleteExchange(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateRecords int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRecords, &weightMsgCreateRecords, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRecords = defaultWeightMsgCreateRecords
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRecords,
		exchangesimulation.SimulateMsgCreateRecords(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRecords int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRecords, &weightMsgUpdateRecords, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRecords = defaultWeightMsgUpdateRecords
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRecords,
		exchangesimulation.SimulateMsgUpdateRecords(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRecords int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRecords, &weightMsgDeleteRecords, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRecords = defaultWeightMsgDeleteRecords
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRecords,
		exchangesimulation.SimulateMsgDeleteRecords(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
