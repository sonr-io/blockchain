
# Sonr Blockchain Node

**Sonr** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Description

Sonr is building the most immersive DWeb experience for both Users and Developers alike. We believe the best way to onboard the next billion users is to create a cohesive end-to-end platform that’s composable and interoperable with all existing protocols.

For this we built our Networking layer in [Libp2p](“https://libp2p.io”) and our Layer 1 Blockchain with [Starport](“https://starport.com”). Our network comprises of two separate nodes: [Highway](“https://github.com/sonr-io/highway”) and [Motor](“https://github.com/sonr-io/motor”), which each have a specific use case on the network. In order to maximize the onboarding experience, we developed our own [Wallet](“https://github.com/sonr-io/wallet) which has value out of the gate!

## Getting Started

### Dependencies

- [Golang](https://go.dev)
- [Libp2p](https://libp2p.io)
- [Starport](https://starport.com)

### Installing

To install the latest version of the Sonr blockchain node's binary, execute the following command on your machine:

``` shell
curl https://sonr.ws/sonr@latest! | sudo bash
```

### Configuration

This project is a pseudo-monorepo, meaning it has a single root directory and all of its packages are in subdirectories. The structure is as follows:

``` text
/channel         ->        Real-time Key/Value Store
/common          ->        Core data types and functions.
/device          ->        Node Device management
/docs            ->        Documentation.
/exchange        ->        Data Transfer related Models.
/host            ->        Libp2p Host Configuration
/identity        ->        Identity management models and interfaces
/node            ->        Highway and Motor node builder configuration
/proto           ->        Protobuf Definition Files.
/transmit        ->        Protocol for byte transmission between nodes
/types           ->        Protobuf Compiled Types
  └─ cpp         ->        +   C++ Definition Files
  └─ go          ->        +   Golang Definition Files
  └─ java        ->        +   Java Definition Files
/wallet          ->        Interfaces for managing Universal Wallet
```

## Usage

To launch the Sonr Blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Start the Blockchain

``` shell
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Run the Flutter Frontend

Starport has scaffolded a Flutter-based mobile app in the `flutter` directory. Run the following commands to install dependencies and start the app:

``` shell
cd flutter
flutter pub get
flutter run
```

### Run the Vue.js Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

``` text
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release

To release a new version of Sonr, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

``` shell
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

Contributors names and contact info

- [Prad Nukala](“https://github.com/prnk28”)
- [Ian K. Judd]("https://github.com/ikjudd")

## Version History

- v0.0.2
  - Various bug fixes and optimizations

- v0.0.1
  - Initial Release

## License

This project facilitated under **Sonr Inc.** is distributed under the **GPLv3 License**. See `LICENSE.md` for more information.

## Acknowledgments

Inspiration, code snippets, etc.

- [Libp2p](https://libp2p.io/)
- [Cosmos](https://www.cosmos.network/)
- [Handshake](https://handshake.org/)
