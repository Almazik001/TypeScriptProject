import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {

    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>    
            )}

                <div style={{display: 'flex'}}>
                    {pages.map(p => 
                        <div
                            key={p.id}
                            onClick={() => setTodoPage(p)}
                            style={{border: p === page ? '5px solid green' : '1px solid gray', padding: 10, margin: 5 }}
                        >
                            {p}
                        </div>  
                    )}
                </div>
        </div>

        
    );
};

export default TodoList;