# ---- Base Node ----
FROM golang:latest AS build
WORKDIR /go/src/github.com/sonr-io/highway
COPY . .

RUN go build -o sonr-hw .

# Install grpc
FROM alpine
EXPOSE 8080 26225 443
COPY --from=build /go/src/github.com/sonr-io/highway/sonr-hw /sonr-hw
CMD ["/sonr-hw"]

