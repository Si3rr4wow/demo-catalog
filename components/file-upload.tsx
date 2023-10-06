import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { FiFile } from 'react-icons/fi';
import { useRef } from 'react';

const FileUpload: React.FC<{
  name: string;
  placeholder: string;
  label: string;
  value: any;
  onChange: any;
  children?: JSX.Element | null;
}> = ({ name, placeholder, label, value, onChange, children }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onDummyClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <FormControl>
      <FormLabel htmlFor="writeUpFile">{label}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={!children && <Icon as={FiFile} />}
        />
        <input
          type="file"
          name={name}
          ref={inputRef}
          style={{ display: 'none' }}
          value={value}
          onChange={onChange}
          // hidden={true}
        ></input>
        {!children && (
          <Input
            placeholder={placeholder || 'Your file ...'}
            onClick={onDummyClick}
          />
        )}
        {children}
      </InputGroup>
    </FormControl>
  );
};

export default FileUpload;
