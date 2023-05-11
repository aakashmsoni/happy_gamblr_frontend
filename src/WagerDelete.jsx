export function WagerDelete(props) {
  const handleClick = () => {
    console.log(props.wager);
    props.onDeleteConfirmation(props.wager);
  };

  return (
    <div>
      <h4>Are you sure you want to delete?</h4>
      <button type="button" onClick={handleClick} className="btn btn-danger">
        Yes
      </button>
      <button type="button" className="btn btn-secondary" onClick={props.onClose}>
        No
      </button>
    </div>
  );
}
