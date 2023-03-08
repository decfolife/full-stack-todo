import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { randBoolean, randProduct } from '@ngneat/falso';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
} from '@storybook/angular';
import { ToDoComponent } from './to-do.component';

/**
 * Falso's `randTodo` function is perfect, but it wasn't as visually
 * pleasing to see filler text while designing. Instead, this uses
 * legitimate English language for the to-do item, and insert a random
 * `completed` value
 */
const randTodo = () => {
  const { id, title, description } = randProduct();
  return {
    id,
    title,
    description,
    completed: randBoolean(),
  };
};

export default {
  title: 'ToDoComponent',
  component: ToDoComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
    componentWrapperDecorator(
      (s) => `
    
    <div style="width: 500px; height: 280px; position: relative; padding: 2rem">${s}</div>`
    ),
  ],
  argTypes: {
    triggerDelete: {
      action: 'delete',
    },
    triggerEdit: {
      action: 'edit',
    },
    triggerToggleComplete: {
      action: 'toggleComplete',
    },
  },
} as Meta<ToDoComponent>;

export const Primary = {
  render: (args: ToDoComponent) => ({
    props: args,
  }),
  args: {
    todo: randTodo(),
  },
};
