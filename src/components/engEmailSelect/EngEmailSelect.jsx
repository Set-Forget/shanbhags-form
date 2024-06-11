'use client';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

function EngEmailSelect({
  engineers,
  engineerName,
  engineerEmail,
  setEngineerEmail,
}) {
  useEffect(() => {
    if (engineerName) {
      const engineerFound = engineers.find(
        (engineer) => engineer[0] === engineerName
      );
      if (engineerFound) {
        setEngineerEmail(engineerFound[1]);
      }
    }
  }, [engineerName, engineers]);

  const handleChange = (value) => {
    setEngineerEmail(value);
  };

  return (
    <Select value={engineerEmail} onValueChange={handleChange}>
      <SelectTrigger className="w-[300px]">
        <SelectValue placeholder="Select Email..." />
      </SelectTrigger>
      <SelectContent>
        {engineers.map((engineer) => (
          <SelectItem key={engineer[1]} value={engineer[1]}>
            {engineer[1]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default EngEmailSelect;
