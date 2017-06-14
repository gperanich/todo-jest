import Todo from '../app/todo';
import React from 'react';
import renderer from 'react-test-renderer';

test('Todo component renders the todo correctly', () => {
    const todo = { id: 1, done: false, name: 'Buy Milk' };
    const rendered = renderer.create(
        <Todo todo={todo} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});