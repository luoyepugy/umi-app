import 'jest';
import Index from '..';
import React from 'react';
import renderer from 'react-test-renderer';
jest.mock('umi-plugin-locale');
describe('Page: index', () => {
    it('Render correctly', () => {
        const wrapper = renderer.create(React.createElement(Index, null));
        expect(wrapper.root.children.length).toBe(1);
        const outerLayer = wrapper.root.children[0];
        expect(outerLayer.type).toBe('div');
        expect(outerLayer.children.length).toBe(2);
        const getStartLink = outerLayer.findAllByProps({
            href: 'https://umijs.org/guide/getting-started.html',
        });
        expect(getStartLink.length).toBe(1);
        expect(getStartLink[0].children).toMatchObject(['Mock text']);
    });
});
//# sourceMappingURL=index.test.js.map