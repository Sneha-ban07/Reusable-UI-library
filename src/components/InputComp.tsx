
interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const InputComp = ({
  label,
  placeholder,
  value,
  error,
  onChange,
}: InputProps) => {
  const hasError = Boolean(error?.trim());

  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>

      <input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={hasError ? "input-error" : ""}
        aria-invalid={hasError}
      />

      {hasError && (
        <span className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputComp;
