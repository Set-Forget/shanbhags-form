'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ModelSelect = ({ compressors, model, setModel }) => {
  const handleChange = (value) => {
    setModel(value);
  };

  const uniqueModels = [];
  const seenModels = new Set();

  compressors.forEach((compressor) => {
    if (!seenModels.has(compressor[0])) {
      seenModels.add(compressor[0]);
      uniqueModels.push(compressor);
    }
  });

  return (
    <Select value={model} onValueChange={handleChange}>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select Compressor Model..." />
      </SelectTrigger>
      <SelectContent>
        {uniqueModels.map((compressor) => (
          <SelectItem key={compressor[1]} value={compressor[0]}>
            {compressor[0]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ModelSelect;
