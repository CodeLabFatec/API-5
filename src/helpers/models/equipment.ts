import {Files} from './files';

export interface Equipment {
  _id: string;
  name: string;
  domain: string;
  longitude: string;
  latitude: string;
  serial: string;
  notes?: string;
  files?: Files[];
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  created_by?: CreatedBy;
}

interface CreatedBy {
  id: string;
  name: string;
}
