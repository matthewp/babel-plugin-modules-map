const assert = require('assert');
const babel = require('babel-core');
const mapRewrite = require('../index.js');

const testCases = [
  {
    before: "import foo from 'foo'",
    after: "import foo from 'bar';",
    config: {
      foo: 'bar'
    }
  },
  {
    before: "import foo from 'foo'",
    after: "import foo from 'foo';",
    config: {}
  },
  {
    before: "import foo from './foo'",
    after: "import foo from './foo';",
    config: {}
  },
  {
    before: "import foo from 'foo/baz'",
    after: "import foo from 'bar/baz';",
    config: {
      foo: 'bar'
    }
  }
]

testCases.forEach(testCase => {
  const result = babel.transform(testCase.before, {
    plugins: [ [mapRewrite, testCase.config] ]
  });

  assert.equal(result.code, testCase.after);
});