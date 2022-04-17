package simulation

import (
	"math/rand"
	"strconv"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/duo-labs/webauthn/webauthn"
	"github.com/fxamacker/cbor/v2"
	"github.com/sonr-io/blockchain/x/registry/keeper"
	"github.com/sonr-io/blockchain/x/registry/types"
)

func SimulateMsgRegisterName(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		pub, err := cbor.Marshal(&types.COSEKey{})
		if err != nil {
			return simtypes.OperationMsg{}, nil, err
		}
		msg := types.NewMsgRegisterName(
			simAccount.Address.String(),
			"test"+strconv.Itoa(r.Int()),
			webauthn.Credential{
				PublicKey: pub,
			},
		)

		txCtx := simulation.OperationInput{
			R:               r,
			App:             app,
			TxGen:           simappparams.MakeTestEncodingConfig().TxConfig,
			Cdc:             nil,
			Msg:             msg,
			MsgType:         msg.Type(),
			Context:         ctx,
			SimAccount:      simAccount,
			ModuleName:      types.ModuleName,
			CoinsSpentInMsg: sdk.NewCoins(),
			AccountKeeper:   ak,
			Bankkeeper:      bk,
		}

		// TODO: Handling the RegisterName simulation

		return simulation.GenAndDeliverTxWithRandFees(txCtx)
	}
}
