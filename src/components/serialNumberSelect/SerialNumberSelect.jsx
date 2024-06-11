'use client';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const SerialNumberSelect = ({compressors, serialNumber, setSerialNumber, model, setModel}) => {

  useEffect(() => {
    if (serialNumber && !model) {
      const modelFound = compressors.find(
        (compressor) => compressor[1] === serialNumber
      );
      if (modelFound) {
        setModel(modelFound[0]);
      }
    }
  }, [compressors, serialNumber]);

  const handleChange = (value) => {
    setSerialNumber(value);
  };

  return (
    <Select value={serialNumber} onValueChange={handleChange}>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select Serial Number..." />
      </SelectTrigger>
      <SelectContent>
        {compressors.map((compressor) => (
          <SelectItem key={compressor[1]} value={compressor[1]}>
            {compressor[1]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SerialNumberSelect