/* eslint-disable */
export default {
  displayName: 'enforce-module-boundaries-lint-reprod',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../coverage/apps/enforce-module-boundaries-lint-reprod',
};
