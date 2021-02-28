import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import App from "@/App";

describe("App", () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(App, {
      localVue,
      vuetify,
      attachToDocument: true,
    });
  });

  it("displays the app name in the nav bar", () => {
    //find app title value
    const title = wrapper.find("[data-test='appTitleAvalialable']");

    //check that the title value is equal to the state value
    expect(title.value === "appTitle");
  });

  it("displays the add todo form and list of todos", () => {
    //find todo form and todolist components
    expect(wrapper.find("[data-test='todoForm']"));
    expect(wrapper.find("[data-test='todoList']"));
  });
});
