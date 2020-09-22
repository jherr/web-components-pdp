import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import MyFooter from "./my-footer";

const CustomElement = wrap(Vue, MyFooter);

window.customElements.define("my-footer", CustomElement);
