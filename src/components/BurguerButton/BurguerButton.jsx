import './_burguerButton.scss';

export const BurguerButton = (props) => {
  const { handleActiveBtn, clicked } = props;
  return (
    <div className="container-burguer">
      <div
        onClick={handleActiveBtn}
        className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
