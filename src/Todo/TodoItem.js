import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },
}

function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context)

  return (
    <li style={styles.li}>
      <span
        className={cn({
          done: todo.completed,
        })}
      >
        <input
          type='checkbox'
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{todo.id + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className='rm' type='button' onClick={() => removeTodo(todo.id)}>
        &times
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem
