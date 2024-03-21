/** @type {import('next').NextConfig} */
export default {
  images: {
    imageSizes: [8],
    deviceSizes: [640, 720, 1280, 1600],
  },
  logging: {
    fetches: { fullUrl: true },
  },
  experimental: {
    typedRoutes: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new VeliteWebpackPlugin(),
    );
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise(
      "VeliteWebpackPlugin",
      async () => {
        if (VeliteWebpackPlugin.started) return;
        VeliteWebpackPlugin.started = true;
        const dev =
          compiler.options.mode === "development";
        const { build } = await import("velite");
        await build({ watch: dev, clean: !dev });
      },
    );
  }
}
