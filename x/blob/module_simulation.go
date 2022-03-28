package blob

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/blockchain/testutil/sample"
	blobsimulation "github.com/sonr-io/blockchain/x/blob/simulation"
	"github.com/sonr-io/blockchain/x/blob/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = blobsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgUploadBlob = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUploadBlob int = 100

	opWeightMsgDownloadBlob = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDownloadBlob int = 100

	opWeightMsgSyncBlob = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSyncBlob int = 100

	opWeightMsgDeleteBlob = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBlob int = 100

	opWeightMsgCreateThereIs = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateThereIs int = 100

	opWeightMsgUpdateThereIs = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateThereIs int = 100

	opWeightMsgDeleteThereIs = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteThereIs int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	blobGenesis := types.GenesisState{
		ThereIsList: []types.ThereIs{
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
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&blobGenesis)
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

	var weightMsgUploadBlob int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUploadBlob, &weightMsgUploadBlob, nil,
		func(_ *rand.Rand) {
			weightMsgUploadBlob = defaultWeightMsgUploadBlob
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUploadBlob,
		blobsimulation.SimulateMsgUploadBlob(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDownloadBlob int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDownloadBlob, &weightMsgDownloadBlob, nil,
		func(_ *rand.Rand) {
			weightMsgDownloadBlob = defaultWeightMsgDownloadBlob
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDownloadBlob,
		blobsimulation.SimulateMsgDownloadBlob(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSyncBlob int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSyncBlob, &weightMsgSyncBlob, nil,
		func(_ *rand.Rand) {
			weightMsgSyncBlob = defaultWeightMsgSyncBlob
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSyncBlob,
		blobsimulation.SimulateMsgSyncBlob(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBlob int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBlob, &weightMsgDeleteBlob, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBlob = defaultWeightMsgDeleteBlob
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBlob,
		blobsimulation.SimulateMsgDeleteBlob(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateThereIs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateThereIs, &weightMsgCreateThereIs, nil,
		func(_ *rand.Rand) {
			weightMsgCreateThereIs = defaultWeightMsgCreateThereIs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateThereIs,
		blobsimulation.SimulateMsgCreateThereIs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateThereIs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateThereIs, &weightMsgUpdateThereIs, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateThereIs = defaultWeightMsgUpdateThereIs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateThereIs,
		blobsimulation.SimulateMsgUpdateThereIs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteThereIs int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteThereIs, &weightMsgDeleteThereIs, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteThereIs = defaultWeightMsgDeleteThereIs
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteThereIs,
		blobsimulation.SimulateMsgDeleteThereIs(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
