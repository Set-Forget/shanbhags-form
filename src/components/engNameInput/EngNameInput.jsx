'use client';

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { cn } from '@/lib/utils';

const EngNameInput = ({ engineers, engineerName, setEngineerName }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {engineerName
            ? engineers.find((engineer) => engineer[0] === engineerName)?.[0]
            : 'Select engineer...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search engineer..." />
          <CommandList>
            <CommandGroup>
              {engineers.map((engineer) => (
                <CommandItem
                  key={engineer[1]}
                  value={engineer[0]}
                  onSelect={(currentValue) => {
                    setEngineerName(
                      currentValue === engineerName ? '' : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      engineerName === engineer[0] ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {engineer[0]}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default EngNameInput;
