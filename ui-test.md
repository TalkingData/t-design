# UI 测试

`t-design` 使用 `vue-test-utils` 搭配 `Jest` 进行单元测试。

`vue-test-utils` 是 Vue.js 官方的单元测试实用工具库，你可以通过[官方文档](https://vue-test-utils.vuejs.org/zh-cn/)查看更多使用方法和API。

`Jest` 是一个由 Facebook 开发的测试运行器，致力于提供一个“bettery-included”单元测试解决方案。你可以在其[官方文档](https://facebook.github.io/jest/)学习到更多 Jest 的知识。

具体的配置和安装方法，请参考[起步](https://vue-test-utils.vuejs.org/zh-cn/guides/getting-started.html)和[用 Jest 测试单文件组件](https://vue-test-utils.vuejs.org/zh-cn/guides/testing-SFCs-with-jest.html)。

## 测试用例

在组件 `src/components/global-footer` 中，我们可以新建一个文件 `index.test.js`，用来测试公共页脚组件的 UI 表现。

```javascript
import { shallow } from 'vue-test-utils';
import HelloWorld from './index.vue';

describe('GlobalHeader test', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(HelloWorld, {
      propsData: {
        msg: 'unit test msg',
      },
    });
  });

  it('should render correct contents', () => {
    wrapper.setData({ title: 'TD' })
    expect(wrapper.vm.$el.textContent.trim()).toEqual('Copyright TD Tendcloud');
  });
});
```

运行 `npm test` 之后可以在终端里看到测试的运行结果。这里断言部分沿用了 jest 默认的 [jasmine2 expect 语法](https://facebook.github.io/jest/docs/en/expect.html#content)。

## 本地执行

使用以下的命令将统一搜索和执行项目中 `*.test.js` 和 `*.spec.js` 格式的用例文件。

```
npm test
```

执行单个或一组用例

```
npm test test/unit/specs/hello-world.spec.js
```