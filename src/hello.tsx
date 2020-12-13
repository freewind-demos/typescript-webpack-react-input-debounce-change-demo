import debounce from 'lodash/debounce';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

type Props = {
  onChange: (name: string) => void
};

export const Hello: FC<Props> = ({ onChange }) => {
  const [name, setName] = useState('');

  const debouncedOnChange = useCallback(debounce(onChange, 500), [onChange]);
  // const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);

  // wrong solutions:
  // const debouncedOnChange = useCallback((name: string) => debounce(() => onChange(name), 500)(), [onChange]);

  useEffect(() => {
    debouncedOnChange(name);
  }, [onChange, name]);

  return <div>
    <h1>Hello {name}</h1>
    <input type='text' value={name} onChange={event => setName(event.target.value)}/>
  </div>;
}
