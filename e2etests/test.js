/* global describe, it, browser */

const expect = require('chai').expect;

describe('TodoList App', () => {

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Todo List');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'Get better at testing';
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('Should allow me to delete a Todo', () => {
    const todoText = 'Get better at testing';

    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');

  });
});