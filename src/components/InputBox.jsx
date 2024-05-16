// export default InputBox;
let inputId;
const InputBox = ({ id, setId, handleSearch }) => {
  const handleChange = (e) => {
   inputId = e.target.value;
   console.log("handle change:",inputId);
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => handleChange(e)}
      />
      <button className="btn" onClick={() => handleSearch(inputId)}>
        Search
      </button>
    </div>
  );
};

export default InputBox;
