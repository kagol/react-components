import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import DetailBlock from './index';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setup = () => {
  // 模拟 props
  const onButtonClick = sinon.spy()
  const props = {
      onEditClick: () => { console.log('Edit click'); onButtonClick(); },
      onDeleteClick: () => { console.log('Delete click'); onButtonClick(); },
      onPreviewClick: () => { console.log('Preview click'); onButtonClick(); }
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<DetailBlock {...props} />)
  return {
    props,
    wrapper
  }
}

describe('DetailBlock', () => {
  const { wrapper, props } = setup();

  // case1
  // 测试标题是否正确
  it('DetailBlock\'s title should be "Ad detail"', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find('.detail-title').text()).toEqual('Ad detail');
  })

  // case2
  // 测试List组件
  it('', () => {
    
  })

  // case3
  // 测试三个操作按钮，编辑/删除/预览

    it('When click "Edit" button, onEditClick() should be called', () => {
        // wrapper.find('#btn-edit').simulate('click')
        // expect(props.onEditClick).toHaveBeenCalled() // toBeCalled

        wrapper.find('#btn-edit').simulate('click')
        expect(props.onEditClick.calledOnce).toBeTruthy
    })
    it('When click "Delete" button, onDeleteClick() should be called', () => {
        wrapper.find('#btn-delete').simulate('click')
        expect(props.onDeleteClick.calledOnce).toBeTruthy
    })
    it('When click "Preview" button, onPreviewClick() should be called', () => {
        wrapper.find('#btn-eye').simulate('click')
        expect(props.onPreviewClick.calledOnce).toBeTruthy
    })

})
