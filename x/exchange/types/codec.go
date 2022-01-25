package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateExchange{}, "exchange/CreateExchange", nil)
	cdc.RegisterConcrete(&MsgReadExchange{}, "exchange/ReadExchange", nil)
	cdc.RegisterConcrete(&MsgUpdateExchange{}, "exchange/UpdateExchange", nil)
	cdc.RegisterConcrete(&MsgDeleteExchange{}, "exchange/DeleteExchange", nil)
	cdc.RegisterConcrete(&MsgCreateRecords{}, "exchange/CreateRecords", nil)
	cdc.RegisterConcrete(&MsgUpdateRecords{}, "exchange/UpdateRecords", nil)
	cdc.RegisterConcrete(&MsgDeleteRecords{}, "exchange/DeleteRecords", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateExchange{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgReadExchange{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateExchange{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteExchange{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRecords{},
		&MsgUpdateRecords{},
		&MsgDeleteRecords{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
