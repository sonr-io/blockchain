package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgUploadBlob{}, "blob/UploadBlob", nil)
	cdc.RegisterConcrete(&MsgDownloadBlob{}, "blob/DownloadBlob", nil)
	cdc.RegisterConcrete(&MsgSyncBlob{}, "blob/SyncBlob", nil)
	cdc.RegisterConcrete(&MsgDeleteBlob{}, "blob/DeleteBlob", nil)
	cdc.RegisterConcrete(&MsgCreateThereIs{}, "blob/CreateThereIs", nil)
	cdc.RegisterConcrete(&MsgUpdateThereIs{}, "blob/UpdateThereIs", nil)
	cdc.RegisterConcrete(&MsgDeleteThereIs{}, "blob/DeleteThereIs", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUploadBlob{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDownloadBlob{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSyncBlob{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteBlob{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateThereIs{},
		&MsgUpdateThereIs{},
		&MsgDeleteThereIs{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
