module github.com/sonr-io/blockchain

go 1.16

require (
	github.com/cosmos/cosmos-sdk v0.44.5
	github.com/cosmos/ibc-go v1.2.2
	github.com/duo-labs/webauthn v0.0.0-20220330035159-03696f3d4499
	github.com/fxamacker/cbor/v2 v2.4.0
	github.com/gogo/protobuf v1.3.3
	github.com/golang/protobuf v1.5.2
	github.com/gorilla/mux v1.8.0
	github.com/grpc-ecosystem/grpc-gateway v1.16.0
	github.com/pkg/errors v0.9.1
	github.com/sonr-io/core v0.23.0
	github.com/spf13/cast v1.4.1
	github.com/spf13/cobra v1.3.0
	github.com/stretchr/testify v1.7.1
	github.com/tendermint/spm v0.1.9
	github.com/tendermint/tendermint v0.34.14
	github.com/tendermint/tm-db v0.6.4
	go.buf.build/grpc/go/sonr-io/blockchain v1.3.5
	google.golang.org/genproto v0.0.0-20220317150908-0efb43f6373e
	google.golang.org/grpc v1.45.0
	gopkg.in/yaml.v2 v2.4.0
)

replace (
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/keybase/go-keychain => github.com/99designs/go-keychain v0.0.0-20191008050251-8e49817e8af4
	github.com/sonr-io/core => ../core
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)
