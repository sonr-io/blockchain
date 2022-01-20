# ---- Base Node ----
FROM golang:latest AS build
WORKDIR /go/src/github.com/sonr-io/sonr/highway
ENV GO111MODULE=on
COPY . .
RUN go build -o sonr-hw cmd/highway/stub.go

# Install grpc
FROM alpine
EXPOSE 8080 26225 443
COPY --from=build /go/src/github.com/sonr-io/sonr/cmd/highway/sonr-hw ./sonr-hw
CMD ["sonr-hw"]

LABEL org.opencontainers.image.source https://github.com/sonr-io/sonr
# ... the rest of the Dockerfile is ...
# ...   omitted from this example   ...
