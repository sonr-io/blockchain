class Sonr < Formula
  desc "The Official Sonr CLI tool for building and deploying services on the Sonr network/blockchain."
  homepage "https://sonr.io"
  version "0.1.4"
  license "GPLv3"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/sonr-io/sonr/releases/download/v0.1.4/sonr-0.1.4-darwin-arm64.tar.gz"
      sha256 "0943382b740013902c3ed4e9b3332e278ec14d12043cfee24af2457da08d0ac8"

      def install
        bin.install "highway-dashboard"
        bin.install "highwayd"
        bin.install "sonr"
      end
    end
    if Hardware::CPU.intel?
      url "https://github.com/sonr-io/sonr/releases/download/v0.1.4/sonr-0.1.4-darwin-amd64.tar.gz"
      sha256 "09d556832bf01509dedd03924ad367675abe8687be70d4047ccdfa21d5de6889"

      def install
        bin.install "highway-dashboard"
        bin.install "highwayd"
        bin.install "sonr"
      end
    end
  end

  on_linux do
    if Hardware::CPU.arm? && Hardware::CPU.is_64_bit?
      url "https://github.com/sonr-io/sonr/releases/download/v0.1.4/sonr-0.1.4-linux-arm64.tar.gz"
      sha256 "517bea91c75910586ed4ecd3d44b46769efd72a923ea6700ad62fe9c666f7fbb"

      def install
        bin.install "highway-dashboard"
        bin.install "highwayd"
        bin.install "sonr"
      end
    end
    if Hardware::CPU.intel?
      url "https://github.com/sonr-io/sonr/releases/download/v0.1.4/sonr-0.1.4-linux-amd64.tar.gz"
      sha256 "e941d069003e6e429f2786abb36b8ca869eff577c0927b003b247bb3fe9e3368"

      def install
        bin.install "highway-dashboard"
        bin.install "highwayd"
        bin.install "sonr"
      end
    end
  end

  def caveats; <<~EOS
    Run `brew info sonr` for more information, or run `sonr --help`.
  EOS
  end
end
