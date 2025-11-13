import { Form, Table, Badge, Button, Modal, InputGroup } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { fetchTodos } from "../data/todos";

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [numPages, setNumPages] = useState(3);
  const [curPage, setCurPage] = useState(1);

  const newIdRef = useRef();
  const newTitleRef = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []);

  useEffect(() => {
    let data = todosRaw;
    if (onlyWaiting) {
      data = data.filter((todo) => !todo.completed);
    }
    setTodos(data);
  }, [todosRaw, onlyWaiting]);

  useEffect(() => {
    setNumPages(Math.ceil(todos.length / itemsPerPage));
  }, [todos, itemsPerPage]);

  useEffect(() => {
    if (numPages <= 0) setCurPage(0);
    else if (curPage > numPages) setCurPage(numPages);
    else if (curPage <= 0) setCurPage(1);
  }, [numPages]);

  const waitingClicked = (id) => {
    const selected = todosRaw.find((t) => t.id === id);
    selected.completed = true;
    setTodosRaw([...todosRaw]);
  };

  const deleteClicked = (id) => {
    setTodosRaw(todosRaw.filter((t) => t.id !== id));
  };

  const saveClicked = () => {
    const newId = Number(newIdRef.current.textContent);
    const title = newTitleRef.current.value;

    if (title.trim() !== "") {
      const newTodo = {
        userId: 1,
        id: newId,
        title,
        completed: false,
      };
      setTodosRaw([...todosRaw, newTodo]);
    }

    newTitleRef.current.value = "";
    handleClose();
  };

  return (
    <>
      {/* Modal for Add Todo */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-plus"></i>
          </Button>
          &nbsp;
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newTodoId">
              <div className="flex items-center space-x-2">
                <span className="font-medium">ID:</span>
                <span
                  ref={newIdRef}
                  className="bg-gray-500 text-white px-2 py-1 rounded-md text-sm"
                >
                  {todosRaw.reduce(
                    (prev, todo) => (todo.id > prev ? todo.id : prev),
                    -1
                  ) + 1}
                </span>
              </div>
            </Form.Group>

            {/* Title */}
            <Form.Group className="mb-3" controlId="newTodoTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={newTitleRef}
                placeholder="ใส่ To do ใหม่"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveClicked}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Form className="mb-2">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="custom-switch"
              className="me-2"
              onChange={(e) => setOnlyWaiting(e.target.checked)}
            />
            show only&nbsp;
            <Button variant="warning" style={{ pointerEvents: "none" }}>
              Waiting&nbsp;<i className="bi bi-clock"></i>
            </Button>
          </div>
          <Form.Select
            className="w-25"
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </Form>

      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th className="text-center" style={{ width: "3rem" }}>
              ID
            </th>
            <th className="text-center">Title</th>
            <th className="text-end" style={{ width: "14rem" }}>
              Completed&nbsp;
              <Button variant="primary" onClick={handleShow}>
                <i className="bi bi-plus"></i>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos
            .slice((curPage - 1) * itemsPerPage, curPage * itemsPerPage)
            .map((todo) => (
              <tr key={todo.id}>
                <td className="text-center">
                  <Badge bg="secondary">{todo.id}</Badge>
                </td>
                <td>{todo.title}</td>
                <td className="text-end">
                  {todo.completed ? (
                    <Badge bg="success" className="fs-6">
                      done
                    </Badge>
                  ) : (
                    <Button
                      variant="warning"
                      onClick={() => waitingClicked(todo.id)}
                    >
                      Waiting&nbsp;<i className="bi bi-clock"></i>
                    </Button>
                  )}
                  &nbsp;
                  <Button
                    variant="danger"
                    onClick={() => deleteClicked(todo.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <div className="text-center">
        <Button
          variant="outline-primary"
          disabled={curPage === 1}
          onClick={() => setCurPage(1)}
        >
          First
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => curPage > 1 && setCurPage((p) => p - 1)}
        >
          Previous
        </Button>
        &nbsp;
        <span>
          {curPage}/{numPages}
        </span>
        &nbsp;
        <Button
          variant="outline-primary"
          disabled={curPage === numPages}
          onClick={() => curPage < numPages && setCurPage((p) => p + 1)}
        >
          Next
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          disabled={curPage === numPages}
          onClick={() => setCurPage(numPages)}
        >
          Last
        </Button>
      </div>
    </>
  );
};

export default Todos;
