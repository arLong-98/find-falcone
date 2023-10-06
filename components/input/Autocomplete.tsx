'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import ListItem from '../display/ListItem';
import Icon from '../display/icons';

export interface AutocompleteProps {
  options: Array<optionItem>;
  placeholder: string;
  onSelect: (props: optionItem) => void;
}

type optionItem = {
  label: string;
  id: string | number;
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder,
  onSelect,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<number | string>();

  useEffect(() => {
    if (selectedOption) {
      handleBlur();
    }
  }, [selectedOption]);

  function handleFocus() {
    setShowOptions(true);
  }

  function handleBlur() {
    setShowOptions(false);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleOptionSelect(label: string, id: number | string) {
    setInputValue(label);
    setSelectedOption(id);
    setShowOptions(false);
    onSelect({ label, id });
  }

  const renderedOptions = useMemo(() => {
    if (inputValue !== '') {
      return options.filter(({ label }: optionItem) => {
        return label.toLowerCase().includes(inputValue.toLowerCase());
      });
    }

    return options;
  }, [options, inputValue]);

  return (
    <div id='autocomplete-container' className='w-[200px]'>
      <div className='flex border-[1px]'>
        <input
          className='w-[150px] outline-none'
          value={inputValue}
          onFocus={handleFocus}
          type='text'
          placeholder={placeholder}
          onChange={handleChange}
        />
        <Icon name='ChevronDown' />
      </div>
      {showOptions && (
        <div>
          {renderedOptions.length > 0 && (
            <ul>
              {renderedOptions.map(({ label, id }) => {
                return (
                  <ListItem
                    key={id}
                    label={label}
                    id={id}
                    onClick={handleOptionSelect}
                  />
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
