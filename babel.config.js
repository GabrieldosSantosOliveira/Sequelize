module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/app': './src/app',
          '@/data': './src/data',
          '@/helpers': './src/helpers',
          '@/infra': './src/infra',
          '@/main': './src/main',
          '@/presentation': './src/presentation',
          '@/test': './test',
        },
      },
    ],
  ],
}
