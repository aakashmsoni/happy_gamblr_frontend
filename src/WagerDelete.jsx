export function WagerDelete(props) {
  const handleClick = () => {
    console.log(props.wager);
    props.onDeleteConfirmation(props.wager);
  };

  return (
    <div>
      <h4 className="text-center">Are you sure you want to delete?</h4>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button type="button" onClick={handleClick} className="btn btn-outline-danger">
          Yes
        </button>
        <button type="button" className="btn btn-outline-secondary" onClick={props.onClose}>
          No
        </button>
      </div>
    </div>
  );
}
