/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { debounce } from '../../utils/helpers';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
  onClear?: () => void;
  autoFocus?: boolean;
}

const searchStyles = {
  container: css`
    position: relative;
    width: 100%;
  `,
  input: css`
    width: 100%;
    padding: 12px 16px;
    padding-right: 40px;
    border-radius: 10px;
    border: none;
    background: rgba(60,80,180,0.08);
    color: #eaf0fa;
    font-size: 1rem;
    outline: none;
    box-shadow: 0 2px 8px rgba(60,80,180,0.10);
    transition: background 0.2s;

    &:focus {
      background: rgba(60,80,180,0.18);
    }

    &::placeholder {
      color: #bfc8db;
    }
  `,
  clearButton: css`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #bfc8db;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover {
      background: rgba(60,80,180,0.18);
      color: #eaf0fa;
    }
  `,
  searchIcon: css`
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #bfc8db;
    font-size: 16px;
    pointer-events: none;
  `,
};

export const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  debounceMs = 300,
  onClear,
  autoFocus = false
}: SearchInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  // Create debounced onChange function
  const debouncedOnChange = debounce(onChange, debounceMs);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  };

  const handleClear = () => {
    setLocalValue('');
    onChange('');
    onClear?.();
  };

  return (
    <div css={searchStyles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={localValue}
        onChange={handleInputChange}
        css={searchStyles.input}
        autoFocus={autoFocus}
      />

      {localValue ? (
        <button
          css={searchStyles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
        >
          ×
        </button>
      ) : (
        <div css={searchStyles.searchIcon}>
          🔍
        </div>
      )}
    </div>
  );
};
