// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Iosaudioplugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "Iosaudioplugin",
            targets: ["IosAudioPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "IosAudioPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/IosAudioPluginPlugin"),
        .testTarget(
            name: "IosAudioPluginPluginTests",
            dependencies: ["IosAudioPluginPlugin"],
            path: "ios/Tests/IosAudioPluginPluginTests")
    ]
)