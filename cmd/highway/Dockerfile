# ---- Base Node ----
FROM golang:latest AS build
WORKDIR /go/src/github.com/sonr-io/sonr/cmd/highway
ENV GO111MODULE=on
COPY . .
RUN go build -o sonr-highway /go/src/github.com/sonr-io/sonr/cmd/highway/main.go

# Install grpc
FROM alpine
EXPOSE 8080 26225 443
COPY --from=build /go/src/github.com/sonr-io/sonr/cmd/highway/highway ./sonr-highway
CMD ["./sonr-highway"]

LABEL org.opencontainers.image.source https://github.com/sonr-io/sonr
# ... the rest of the Dockerfile is ...
# ...   omitted from this example   ...
