import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { Output } from "./../Output";
import convertToLink from "./../convertToLink";
import Input from "../Input";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Converting to link works correctly", () => {
  test("Function is defined", () => {
    const text = "vk.com";
    expect(convertToLink).toBeDefined();
  });

  test("Convert link to link", () => {
    expect(convertToLink("vk.com")).toEqual(
      "<a href='https://vk.com'>https://vk.com</a>"
    );
    expect(convertToLink("www.ya.ru")).toEqual(
      "<a href='https://www.ya.ru'>https://www.ya.ru</a>"
    );
    expect(convertToLink("google.com")).toEqual(
      "<a href='https://google.com'>https://google.com</a>"
    );
    expect(convertToLink("foo.com/blah_blah/")).toEqual(
      "<a href='https://foo.com/blah_blah/'>https://foo.com/blah_blah/</a>"
    );
    expect(convertToLink("userid@example.com:8080")).toEqual(
      "<a href='https://userid@example.com:8080'>https://userid@example.com:8080</a>"
    );
  });

  test("Do not convert reqular text to link", () => {
    expect(convertToLink("word")).toEqual("word");
    expect(convertToLink("http://")).toEqual("http://");
    expect(convertToLink("http://?")).toEqual("http://?");
    expect(convertToLink("http://##/")).toEqual("http://##/");
    expect(convertToLink("h://test")).toEqual("h://test");
  });
});

describe("Output testing", () => {
  test("Render Output with emty props", () => {
    act(() => {
      render(<Output text="" />, container);
    });
    expect(container.textContent).toBe("Ваш текст:");
  });

  test("Render Output with some text", () => {
    act(() => {
      render(<Output text="some text" />, container);
    });
    expect(container.textContent).toBe("Ваш текст:some text");
  });

  test("Render Output with some text and link", () => {
    act(() => {
      render(<Output text="some text example.com" />, container);
    });
    expect(container.textContent).toBe(
      "Ваш текст:some text https://example.com"
    );
  });
});

describe("Input testing", () => {
  test("Matches the snapshot", () => {
    const component = create(<Input />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
