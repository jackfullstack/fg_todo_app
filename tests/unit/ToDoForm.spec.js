import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import ToDoForm from "@/components/ToDoForm";

describe("ToDoForm", () => {
  let localVue;
  let vuetify;
  let wrapper;

  beforeEach(() => {
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
    vuetify = new Vuetify();
    wrapper = mount(ToDoForm, {
      localVue,
      vuetify,
      attachToDocument: true,
    });
  });

  it("emits todo added event when submited with valid data", () => {
    //set text input value
    const textInput = wrapper.find('[data-test="todoText"]');
    textInput.setValue("To Do Item");

    //set select option to the first oprion
    wrapper
      .find("[data-test='prioritySelect']")
      .setValue("Important!", { force: true });

    //trigger form submit
    wrapper.find("[data-test='submitButton']").trigger("submit");

    //check todo-added event is emitted
    expect(wrapper.emitted("todo-added")).toHaveLength(1);
  });

  it("does not submit with no data", () => {
    //trigger form submit
    wrapper.find("[data-test='submitButton']").trigger("submit");

    //check todo-added event is not emitted
    expect(wrapper.emitted("todo-added")).toBeFalsy();
  });

  it("resets to inital state when clear button is clicked", () => {
    //trigger clear form button
    wrapper.find("[data-test='clearButton']").trigger("click");

    //check todoText field is set to empty string
    expect(wrapper.find('[data-test="todoText"]').value === "");

    //check prioritySelection value is set to empty string
    expect(wrapper.find('[data-test="prioritySelect"]').value === "");
  });
});
