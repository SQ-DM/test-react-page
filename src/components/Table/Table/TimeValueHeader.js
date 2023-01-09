
function TimeValueHeader({
  clients,
  setActive,
  setActiveId,
  activeId,
  min,
  sec,
}) {

  const onHandleActive = (id) => {
    setActive();
    setActiveId(id);
  };

  return clients.map((client) => (
    <th scope="col" key={client.id} onClick={() => onHandleActive(client.id)}>
      {activeId === client.id ? (
        <span>
          {min}:{sec}
        </span>
      ) : null}
    </th>
  ));
}

export default TimeValueHeader;
