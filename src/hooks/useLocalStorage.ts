import { useState } from 'react';

const useLocalStorage = <T,>( key: string, initialValue: T ) => {
  const [ storedValue, setStoredValue ] = useState<T>( () => {
    try {
      const item = window.localStorage.getItem( key );
      return item ? JSON.parse( item ) : initialValue;
    } catch ( error ) {
      console.log( 'Error reading localStorage key “' + key + '”:', error );
      return initialValue;
    }
  } );

  const setValue = ( value: T ) => {
    try {
      setStoredValue( value );
      window.localStorage.setItem( key, JSON.stringify( value ) );
    } catch ( error ) {
      console.log( 'Error setting localStorage key “' + key + '”:', error );
    }
  };

  return [ storedValue, setValue ] as const;
};

export default useLocalStorage;
