package registry

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/sonr-io/sonr/testutil/sample"
	registrysimulation "github.com/sonr-io/sonr/x/registry/simulation"
	"github.com/sonr-io/sonr/x/registry/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = registrysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRegisterService = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterService int = 100

	opWeightMsgRegisterName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterName int = 100

	opWeightMsgAccessName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAccessName int = 100

	opWeightMsgUpdateName = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateName int = 100

	opWeightMsgAccessService = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAccessService int = 100

	opWeightMsgUpdateService = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateService int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	registryGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&registryGenesis)
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

	var weightMsgRegisterService int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterService, &weightMsgRegisterService, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterService = defaultWeightMsgRegisterService
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterService,
		registrysimulation.SimulateMsgRegisterService(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRegisterName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterName, &weightMsgRegisterName, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterName = defaultWeightMsgRegisterName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterName,
		registrysimulation.SimulateMsgRegisterName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAccessName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAccessName, &weightMsgAccessName, nil,
		func(_ *rand.Rand) {
			weightMsgAccessName = defaultWeightMsgAccessName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAccessName,
		registrysimulation.SimulateMsgAccessName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateName int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateName, &weightMsgUpdateName, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateName = defaultWeightMsgUpdateName
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateName,
		registrysimulation.SimulateMsgUpdateName(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAccessService int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAccessService, &weightMsgAccessService, nil,
		func(_ *rand.Rand) {
			weightMsgAccessService = defaultWeightMsgAccessService
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAccessService,
		registrysimulation.SimulateMsgAccessService(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateService int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateService, &weightMsgUpdateService, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateService = defaultWeightMsgUpdateService
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateService,
		registrysimulation.SimulateMsgUpdateService(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
