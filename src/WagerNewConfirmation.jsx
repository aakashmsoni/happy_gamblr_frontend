export function WagerNewConfirmation(props) {
  const handleSubmit = () => {
    props.onCreateWager(props.params);
    props.handleClose;
  };

  return (
    <div>
      <h4 className="text-center">Confirm Submit?</h4>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button type="button" onClick={handleSubmit} className="btn btn-outline-success">
          Yes
        </button>
        <button type="button" className="btn btn-outline-secondary" onClick={props.onClose}>
          No
        </button>
      </div>
    </div>
  );
}
