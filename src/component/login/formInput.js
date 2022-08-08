import "../../component/login/formInput.css"

function FormInput(props) {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className="formInput">
            <label className="label">{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}
export default FormInput;