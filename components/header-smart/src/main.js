import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import MyHeader from './my-header';

const CustomElement = wrap(Vue, MyHeader);

window.customElements.define('my-header', CustomElement);
