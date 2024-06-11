'use client';

import { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import EngNameInput from '../engNameInput/EngNameInput';
import { fetchEngineers } from '@/services/engineers';
import EngEmailSelect from '../engEmailSelect/EngEmailSelect';
import { getEngineerClients } from '@/services/clients';
import ClientNameInput from '../clientNameInput/ClientNameInput';
import { Button } from '../ui/button';
import getClientCompressors from '@/services/compressor';
import SerialNumberSelect from '../serialNumberSelect/SerialNumberSelect';
import ModelSelect from '../modelSelect/ModelSelect';
import submitForm from '@/services/submitForm';

export default function Form() {
  const [engineers, setEngineers] = useState([]);
  const [engineerName, setEngineerName] = useState('');
  const [engineerEmail, setEngineerEmail] = useState('');
  const [clients, setClients] = useState([]);
  const [clientName, setClientName] = useState('');
  const [compressors, setCompressors] = useState([]);
  const [serialNumber, setSerialNumber] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    const getEngineers = async () => {
      try {
        const engineersData = await fetchEngineers();
        setEngineers(engineersData);
      } catch (e) {
        console.error('Error fetching engineers: ', e);
      }
    };

    getEngineers();
  }, []);

  useEffect(() => {
    const getClients = async () => {
      try {
        const clientData = await getEngineerClients(engineerName);
        setClients(clientData);
      } catch (e) {
        console.error('Error fetching engineers: ', e);
      }
    };
    if (!engineerName) return;
    getClients();
  }, [engineerName]);

  useEffect(() => {
    const getCompressors = async () => {
      try {
        const compressorData = await getClientCompressors(clientName);
        setCompressors(compressorData);
      } catch (e) {
        console.error('Error fetching engineers: ', e);
      }
    };
    if (!clientName) return;
    getCompressors();
  }, [clientName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !engineerName ||
      !engineerEmail ||
      !clientName ||
      !serialNumber ||
      !model
    ) {
      console.log('Please verify the data');
      return;
    }
    const submitData = {
      engineerName,
      engineerEmail,
      clientName,
      serialNumber,
      model,
      action: 'submitForm',
    };
    console.log(submitData);
    submitForm(submitData);
  };

  return (
    <form className="flex flex-col items-center justify-center w-full">
      <div>
        <div className="flex flex-col gap-2 my-2 border p-6 rounded shadow">
          <Label>Service Engineer Name</Label>
          <EngNameInput
            engineers={engineers}
            engineerName={engineerName}
            setEngineerName={setEngineerName}
          />
        </div>
        <div className="flex flex-col gap-2 my-2 border p-6 rounded shadow">
          <Label>Email</Label>
          <EngEmailSelect
            engineers={engineers}
            engineerName={engineerName}
            engineerEmail={engineerEmail}
            setEngineerEmail={setEngineerEmail}
          />
        </div>
        <div className="flex flex-col gap-2 my-2 border p-6 rounded shadow">
          <Label>Account Name</Label>
          <ClientNameInput
            clients={clients}
            clientName={clientName}
            setClientName={setClientName}
          />
        </div>
        <div className="flex flex-col gap-2 my-2 border p-6 rounded shadow">
          <Label>Compressor Serial No.</Label>
          <SerialNumberSelect
            compressors={compressors}
            serialNumber={serialNumber}
            setSerialNumber={setSerialNumber}
            model={model}
            setModel={setModel}
          />
        </div>
        <div className="flex flex-col gap-2 my-2 border p-6 rounded shadow">
          <Label>Compressor Model</Label>
          <ModelSelect
            compressors={compressors}
            model={model}
            setModel={setModel}
          />
        </div>
        <Button onClick={handleSubmit} className="my-4">
          Submit
        </Button>
      </div>
    </form>
  );
}
